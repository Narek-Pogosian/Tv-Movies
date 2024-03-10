interface ScoreRangeProps {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ScoreRange({ value, onChange }: ScoreRangeProps) {
  return (
    <div>
      <label htmlFor="vote_average" className="block text-sm font-medium">
        Minimum Rating (0-10)
      </label>
      <input
        type="range"
        id="vote_average"
        name="vote_average"
        value={value}
        min="0"
        max="10"
        step={1}
        onChange={onChange}
        className="w-full accent-rose-500 dark:accent-rose-400"
      />
    </div>
  );
}

export default ScoreRange;
