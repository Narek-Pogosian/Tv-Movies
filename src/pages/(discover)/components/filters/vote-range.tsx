interface ScoreRangeProps {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function VoteRange({ value, onChange }: ScoreRangeProps) {
  return (
    <div>
      <label htmlFor="vote_count" className="block text-sm font-medium">
        Minimum Votes (0-500)
      </label>
      <input
        type="range"
        id="vote_count"
        name="vote_count"
        value={value}
        min="0"
        max="500"
        step={50}
        onChange={onChange}
        className="w-full"
      />
    </div>
  );
}

export default VoteRange;
