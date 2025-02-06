import os
import sys
from pathlib import Path
from flask import Flask, jsonify,request

from browser_use.agent.views import ActionResult
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import asyncio
from langchain_google_genai import ChatGoogleGenerativeAI

from pydantic import SecretStr
from dotenv import load_dotenv
load_dotenv()
from langchain_openai import ChatOpenAI		

from browser_use import Agent, Controller
from browser_use.browser.browser import Browser, BrowserConfig
from browser_use.browser.context import BrowserContext


app = Flask(__name__)

browser = Browser(
	config=BrowserConfig(
		# NOTE: you need to close your chrome browser - so that this can open your browser in debug mode
		chrome_instance_path='C:\Program Files\Google\Chrome\Application\chrome.exe',
	)
)

async def main(user_query):
	agent = Agent(
		task=user_query,
    llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash-exp', api_key=SecretStr(os.getenv("GEMINI_API_KEY"))),
		browser=browser,
	)

	await agent.run()
	await browser.close()

	return ({"success":True,"msg":'Task completed successfully!'})


@app.route('/api/run-agent', methods=['POST'])
def receive_data():
    data = request.json 
    taskDescription = data.get('taskDescription', '')
    additionalInfo= data.get('additionalInfo', '')
    if taskDescription == '':
        return jsonify({"success":False,"message": "taskDescription not found!"})
    if additionalInfo != '':
         user_query = taskDescription + " use this additionalInfo - > " + additionalInfo
    asyncio.run(main(user_query))
    return jsonify({"success":True,"message": "Data received successfully!"})





if __name__ == '__main__':
    app.run(port=5328)
