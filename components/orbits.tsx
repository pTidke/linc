import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <Image src="/icons/computer-science.png" alt="Computer Science" width={40} height={40} />
        <Image src="/icons/human-sensing.png" alt="Human Sensing" width={40} height={40} />
        <Image src="/icons/neuroscience.png" alt="Neuroscience" width={40} height={40} />
        <Image src="/icons/cognitive-science.png" alt="Cognitive Science" width={40} height={40} />
        <Image src="/icons/social-psychology.png" alt="Social Psychology" width={40} height={40} />
        <Image src="/icons/nutritional-science.png" alt="Nutritional Science" width={40} height={40} />
        <Image src="/icons/psychiatry.png" alt="Psychiatry" width={40} height={40} />
        <Image src="/icons/robotics.png" alt="Robotics" width={40} height={40} />
      </OrbitingCircles>

      {/* <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        
      </OrbitingCircles> */}

      {/* Center icon */}
      <div className="absolute z-10">
        <Image
          src="/icons/construction.png"
          alt="Construction Engineering"
          width={50}
          height={50}
          className="drop-shadow-md"
        />
      </div>
    </div>
  );
}
