import Card from "./card";

interface PersonCardProps {
  id: number;
  image: string;
  name: string;
}

function PersonCard({ id, image, name }: PersonCardProps) {
  return (
    <Card>
      <Card.Image href={`/person/${id}`} image={image} title={name} />
      <Card.Info>
        <Card.Title href={`/person/${id}`} title={name} />
      </Card.Info>
    </Card>
  );
}

export default PersonCard;
