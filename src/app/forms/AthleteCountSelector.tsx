import { Button } from "@/components/ui/button";

export default function AthleteCountSelector({ onSelect }: { onSelect: (count: number) => void }) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">How many athletes are registering?</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((count) => (
            <Button
              key={count}
              type="button"
              variant="outline"
              className="py-6 text-lg"
              onClick={() => onSelect(count)}
            >
              {count} {count === 1 ? 'Athlete' : 'Athletes'}
            </Button>
          ))}
        </div>
      </div>
    );
  }