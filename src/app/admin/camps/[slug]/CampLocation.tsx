type CampLocationProps = {
    location: string
  }
  
  const CampLocation = ({ location }: CampLocationProps) => (
    <div className="py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-xl font-semibold text-gray-700">Location</h2>
      <p className="text-gray-50">{location}</p>
    </div>
  )
  
  export default CampLocation
  