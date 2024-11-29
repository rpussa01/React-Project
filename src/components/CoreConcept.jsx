export default function CoreConcept({title, description,image})
{
  return(
    <li>
      <ul><img src={image} alt="" /></ul>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}