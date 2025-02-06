export default function Partners() {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        <div className="container px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center">
            {["Sennheiser", "DataStax", "Cohere", "Bosch"].map((partner) => (
              <div
                key={partner}
                className="text-gray-400 font-semibold text-xl opacity-50 hover:opacity-100 transition-opacity"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  