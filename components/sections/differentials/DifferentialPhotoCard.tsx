import Image from "next/image";
import { profile } from "@/lib/data";

export default function DifferentialPhotoCard() {
  return (
    <div className="relative min-h-[260px] md:min-h-[320px] overflow-hidden rounded-2xl bg-sand ring-1 ring-inset ring-espresso/5">
      <Image
        src={profile.headshot}
        alt={profile.shortName}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        loading="lazy"
        className="object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent pointer-events-none">
        <div className="font-mono text-[0.65rem] uppercase tracking-widest text-linen/70 mb-1">
          {"<patrick />"}
        </div>
        <div className="font-display text-sm text-linen font-semibold">
          {profile.shortName}
        </div>
      </div>
    </div>
  );
}
