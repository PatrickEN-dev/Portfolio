import SafeImage from "@/components/ui/SafeImage";
import { profile } from "@/lib/data";

export default function DifferentialPhotoCard() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-sand ring-1 ring-inset ring-espresso/5">
      <SafeImage
        src={profile.headshot}
        alt={profile.shortName}
        className="absolute inset-0 h-full w-full object-cover object-center"
        fallback={
          <div className="absolute inset-0 flex flex-col items-end justify-end gap-1 p-7 bg-gradient-to-br from-caramel/20 via-sand to-warmgray/15 text-right">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-espresso/55">
              {"<patrick.almeida />"}
            </span>
            <span className="font-display text-display-sm tracking-tighter2 text-espresso/80 leading-tight">
              Full Stack
              <br />
              Developer.
            </span>
          </div>
        }
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
