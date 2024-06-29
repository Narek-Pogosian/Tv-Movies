import Card from "./card";

interface PersonCardProps {
  id: number;
  image: string;
  name: string;
  character?: string;
}

function PersonCard({ id, image, name, character }: PersonCardProps) {
  return (
    <Card title={name}>
      <Card.Image image={image} title={name} />
      <Card.Info>
        <Card.Title title={name} href={`/person/${id}`} />
        {character && (
          <p className="text-neutral-300 !font-base truncate" title={character}>
            <span className="text-xs text-neutral-400">as {character}</span>
          </p>
        )}
      </Card.Info>
    </Card>
  );
}

export default PersonCard;
