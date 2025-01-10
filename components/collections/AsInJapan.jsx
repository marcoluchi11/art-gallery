import Description from "../Description";
import ImageClickHover from "../ImageClickHover";
import InquirePrints from "../InquirePrints";

export default function AsInJapan() {
  return (
    <>
      <Description
        text="Embark on a journey through the intricate world of Japanese art, where
        every stroke tells a story, and every motif carries profound cultural
        significance. These art pieces are a testament to the delicate balance
        of nature, spirituality, and the ephemeral beauty of existence. From the
        graceful movements to sharp lines that transport us to a realm where
        simplicity meets profound depth. As in Japan, collection motives invite
        us to appreciate the elegance in simplicity, to find harmony in
        asymmetry, and to recognize the profound connection between art and the
        human spirit. Each motif holds a key to unlocking a world of tradition,
        symbolism, and a timeless appreciation for the beauty that surrounds us."
      />
      <InquirePrints />

      <div className="flex flex-wrap mt-[80px] ">
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130624.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130748.png"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130832.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130857.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130924.png"
          />
        </div>

        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/125322.png"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130512.png"
          />

          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/124824.png"
          />
        </div>

        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/124900.png"
          />
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/124935.png"
          />
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/124959.png"
            sold={true}
          />
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/125058.png"
          />
          <ImageClickHover
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/125252.png"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10">
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/131253.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/131328.png"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/131416.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/131217.png"
            sold={true}
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130140.png"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130219.png"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/130426.png"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7288.png"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7287.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7295.png"
          />
          <ImageClickHover
            text="Composition 20*93 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7298.png"
          />
        </div>
        <div className="flex flex-wrap md:flex-row gap-5  w-full mt-10 mb-10">
          <ImageClickHover
            // missing
            text="Mixed Media 2020:18X24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7291.png"
            sold={true}
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7286.png"
          />
          <ImageClickHover
            text="Composition 20*20 D\ 19x24’ ACRYLICS ON PAPER"
            source="/asinjapan/IMG-7294.png"
          />
        </div>
      </div>
    </>
  );
}
