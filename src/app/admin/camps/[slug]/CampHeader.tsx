type CampHeaderProps = {
    title: string
    imageUrl?: string
  }
  
  const CampHeader = ({ title, imageUrl }: CampHeaderProps) => (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={title}
          className="mt-6 mx-auto rounded-2xl shadow-lg max-h-96 object-cover"
        />
      )}
    </div>
  )
  
  export default CampHeader
  