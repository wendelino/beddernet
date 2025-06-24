"use client";

export default function DeviceAnimation() {
  return (
    <div className="relative w-[255px] h-[180px]">
      <style jsx>{`
        @keyframes dot1_ {
          3%,
          97% {
            width: 240px;
            height: 150px;
            margin-top: -75px;
            margin-left: -120px;
          }
          30%,
          36% {
            width: 120px;
            height: 180px;
            margin-top: -90px;
            margin-left: -60px;
          }
          63%,
          69% {
            width: 60px;
            height: 120px;
            margin-top: -60px;
            margin-left: -30px;
          }
        }

        @keyframes dot2_ {
          3%,
          97% {
            width: 225px;
            height: 135px;
            margin-left: -112.5px;
            margin-top: -67.5px;
            grid-template-columns: repeat(3, minmax(0, 1fr))
          }
          30%,
          36% {
            width: 105px;
            height: 144px;
            margin-left: -52.5px;
            margin-top: -72px;
            grid-template-columns: repeat(2, minmax(0, 1fr))
          }
          63%,
          69% {
            width: 48px;
            height: 98px;
            margin-left: -24px;
            margin-top: -45px;
            grid-template-columns: repeat(1, minmax(0, 1fr))
          }
        }

        @keyframes dot3_ {
          3%,
          97% {
            width: 60px;
            height: 30px;
            margin-left: -30px;
            margin-top: 75px;
          }
          30%,
          36% {
            width: 12px;
            height: 12px;
            margin-left: -6px;
            margin-top: 74px;
            border-radius: 8px;
          }
          63%,
          69% {
            width: 24px;
            height: 6px;
            margin-left: -12px;
            margin-top: -55px;
            border-radius: 10px;
          }
        }
      `}</style>

      {/* dot1 */}
      <div
        className="absolute top-1/2 left-1/2 z-10 rounded-md bg-muted-foreground"
        style={{
          width: "240px",
          height: "150px",
          marginLeft: "-120px",
          marginTop: "-75px",
          animation: "dot1_ 6s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite",
        }}
      />

      {/* dot2 */}
      <div
        className="absolute top-1/2 left-1/2 z-20 rounded bg-muted overflow-hidden grid gap-1 p-1 grid-cols-3"
        style={{
          width: "225px",
          height: "135px",
          marginLeft: "-112.5px",
          marginTop: "-67.5px",
          animation: "dot2_ 6s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite",
        }}
      >
        <div className="bg-company-foreground/20 rounded-sm" />
        <div className="bg-company-foreground/40 rounded-sm" />
        <div className="bg-company-foreground/60 rounded-sm" />
      </div>

      {/* dot3 */}
      <div
        className="absolute top-1/2 left-1/2 z-30 rounded-b-md bg-foreground"
        style={{
          width: "60px",
          height: "30px",
          marginLeft: "-30px",
          marginTop: "75px",
          animation: "dot3_ 6s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite",
        }}
      />
    </div>
  );
}
