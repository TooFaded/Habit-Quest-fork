"use client";
import ClassCard from "../components/ClassCard";
import { useRouter } from "next/navigation";

export default function ClassSelection() {
  const router = useRouter();

  const classes = [
    {
      title: "Mage",
      src: "/witch-hat.png",
      description: "High intelligence and magic.",
      learnMoreInfo: [
        "Focus Bonus: Mages receive bonuses for maintaining focus. Completing tasks that require concentration or learning (e.g., studying, reading) grants extra XP.",
        "Magic Boost: Mages can occasionally use a ‘magic spell’ to add double XP to one task a week.",
        "Intelligence Buff: Habits that involve mental activities (e.g., puzzles, learning new skills) grant additional XP.",
      ],
    },
    {
      title: "Warrior",
      src: "/spear.png",
      description: "High intelligence and magic.",
      learnMoreInfo: [
        "Endurance Bonus: Warriors gain extra XP for tasks requiring physical endurance (e.g., exercise, physical labor).",
        "Strength Boost: Warriors can use a ‘strength boost’ to double the XP from one physical task a week.",
        "Defense Buff: Habits involving physical activity (e.g., sports, working out) grant additional XP.",
      ],
    },
    {
      title: "Rogue",
      src: "/dagger.png",
      description: "High intelligence and magic.",
      learnMoreInfo: [
        "Speed Bonus: Rogues receive bonuses for quick task completion. Completing tasks quickly grants extra XP.",
        "Stealth Boost: Rogues can use a ‘stealth boost’ to double XP for one stealthy task a week.",
        "Agility Buff: Habits involving agility (e.g., running, yoga) grant additional XP.",
      ],
    },
  ];

  const handlePickClass = (characterClass) => {
    router.push(`/character-option?class=${characterClass}`);
  };

  return (
    <main>
      <section className="text-center">
        <h1 className="text-2xl">Choose your class</h1>
      </section>
      <section className="flex flex-wrap sm:space-x-4 justify-center items-center">
        {classes.map((characterClass, index) => (
          <ClassCard
            key={index}
            title={characterClass.title}
            imageUrl={characterClass.src}
            description={characterClass.description}
            pickLabel={`Pick ${characterClass.title}`}
            learnMoreLabel="Learn More"
            learnMoreInfo={characterClass.learnMoreInfo}
            onPick={() => handlePickClass(characterClass.title)}
          />
        ))}
      </section>
    </main>
  );
}
