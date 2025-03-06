import logging
import os
import sys
import asyncio
from flask import Flask, jsonify, request
from dotenv import load_dotenv


# Add the src directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
load_dotenv()


from langchain_google_genai import ChatGoogleGenerativeAI

from pydantic import SecretStr


from browser_use import Agent
from browser_use.browser.browser import Browser, BrowserConfig
# from utils.agent_state import AgentState

logger = logging.getLogger(__name__)
app = Flask(__name__)


# Global variables for persistence
_global_browser = None
_global_browser_context = None
_global_agent = None

# Create the global agent state instance
# _global_agent_state = AgentState()


_global_browser = Browser(
    config=BrowserConfig(
        # NOTE: you need to close your chrome browser - so that this can open your browser in debug mode
        # chrome_instance_path="C:\Program Files\Google\Chrome\Application\chrome.exe",
        chrome_instance_path="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    )
)

# To run the agent


async def run_agent(taskDescription):
    try:
        global _global_agent_state, _global_browser, _global_agent
        _global_agent_state.clear_stop()
        _global_agent = Agent(
            task=taskDescription,
            llm=ChatGoogleGenerativeAI(
                model="gemini-2.0-flash-exp",
                api_key=SecretStr(os.getenv("GEMINI_API_KEY")),
            ),
            browser=_global_browser,
        )
        message = "Running agent..."
        logger.info(f"🟢 {message}")
        await _global_agent.run()
        await _global_browser.close()

        return {"success": True, "msg": "Task completed successfully!"}
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        return {"success": False, "msg": f"Error: {str(e)}"}


@app.route("/api/run-agent", methods=["POST"])
def receive_data():
    data = request.json
    print(data)
    taskDescription = data.get("taskDescription", "Not found")
    additionalInfo = data.get("additionalInfo", "Not found")
    print(taskDescription)
    print(additionalInfo)
    asyncio.run(run_agent(taskDescription))
    return jsonify({"success": True, "message": "Data received successfully!"})


async def stop_agent():
    """Request the agent to stop and update UI with enhanced feedback"""
    global _global_agent_state, _global_browser_context, _global_browser, _global_agent

    try:
        # Request stop
        _global_agent.stop()

        # Update UI immediately
        message = "Stop requested - the agent will halt at the next safe point"
        logger.info(f"🛑 {message}")

        # Return UI updates
        return (
            message,  # errors_output
            # gr.update(value="Stopping...", interactive=False),  # stop_button
            # gr.update(interactive=False),  # run_button
        )
    except Exception as e:
        error_msg = f"Error during stop: {str(e)}"
        logger.error(error_msg)
        return (
            error_msg,
            # gr.update(value="Stop", interactive=True),
            # gr.update(interactive=True),
        )


@app.route("/api/stop-agent", methods=["GET"])
def to_stop_agent():
    asyncio.run(stop_agent())
    return jsonify({"success": True, "message": "Data received successfully!"})


if __name__ == "__main__":
    app.run(port=5328)
