export const MapSection = () => {
  const campLocation = {
    "name": "XLR8 Camp Location:",
    "lat": "42.24062",
    "lng": "-87.884734"
  }
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          {campLocation.name}
        </h2>
        <div className=" shadow-lg rounded-lg overflow-hidden">
          <div className="h-auto w-full">
            <div className="flex items-center justify-center h-full ">
              <iframe
                className="w-full h-[350px] rounded-[10px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${campLocation.lat},${campLocation.lng}&z=15&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
