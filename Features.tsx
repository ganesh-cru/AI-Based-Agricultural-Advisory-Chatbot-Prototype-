export function Features() {
  const items = [
    { title: "Crop Prediction", desc: "AI model suggests optimal crops." },
    { title: "Weather Insights", desc: "Real-time weather integrated with OpenWeather API." },
    { title: "Fertilizer Advice", desc: "Custom fertilizer recommendations." },
  ]
  return (
    <section className="p-8 grid md:grid-cols-3 gap-6 bg-gray-50">
      {items.map((f) => (
        <div key={f.title} className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-semibold text-xl text-green-700">{f.title}</h3>
          <p className="text-gray-600 mt-2">{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
