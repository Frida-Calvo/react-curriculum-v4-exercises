// - Default export a component that **contains** an array of snack objects (each with `name` and `rank`, where `1` = favorite).
//      - Start with the array ordered from **least favorite to most favorite**.
//      - Use JavaScript’s `.toSorted()` to return a new array ordered from **most favorite (rank 1) to least favorite**.
//      - Render the sorted snacks as a list (ordered list or using `.map()`).
//      - Include at least **3–5** snacks.

export default function SnackList() {
  const snacks = [
    { name: 'Rice Cracker', rank: 5 },
    { name: 'Seaweed', rank: 4 },
    { name: 'Roasted Peanuts', rank: 3 },
    { name: 'Cucumber with Lime', rank: 2 },
    { name: 'Watermelon with Tajin', rank: 1 },
  ];

  const fave2least = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ol>
        {fave2least.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
}
