type CampDescriptionProps = {
    description: string
  }
  
  const CampDescription = ({ description }: CampDescriptionProps) => (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-700 py-2 px-6 md:px-12 lg:px-24">Description</h2>
      <div
        className="text-gray-50"
        dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
  
  export default CampDescription
  