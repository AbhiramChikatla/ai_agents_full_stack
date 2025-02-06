export function Metrics() {
    const stats = [
      { value: "60k+", label: "Developer" },
      { value: "5k+", label: "GitHub Star" },
      { value: "4x", label: "Faster Computer-use" },
    ]
  
    return (
      <section className="container px-4 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight sm:text-6xl">{stat.value}</div>
              <div className="mt-2 text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  