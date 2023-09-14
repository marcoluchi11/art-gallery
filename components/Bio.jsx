import Image from "next/image";

export default function Bio() {
  return (
    <article className="mt-[160px] w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col xl:flex-row justify-center items-center">
        <Image
          className="rounded-md"
          src="/IMG_7248.jpg"
          alt="portraitImage"
          width={300}
          height={500}
        />
        <Image
          className="rounded-md hidden lg:block mt-5"
          src="/IMG_7249.jpg"
          alt="lookingCeiling"
          width={300}
          height={500}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-justify">
        <p className="font-thin">
          <span className="font-bold">Albion Vu</span> is an architect, fashion
          designer and an abstract painter sharing his life between NYC and
          Martha&apos;s Vineyard. Born and raised in Eastern Europe. Moved to
          the USA right after he graduated in Architecture and Design. Between
          all this time he has practiced abstract painting and fashion design
          and constantly creating pieces that are a mark of his artistic life.
        </p>

        <p className="font-thin mt-5">
          Speaking of that, some of the main sources of his inspiration to make
          art but not only that followed the artist throughout{" "}
          <span className="italic">15 years</span> are COLOR, SHAPES, SILUETES,
          STRUCTURE, TEXTURE, DEPTH, CAOS, SIMPLICITY. A journey that will
          follow you through the entire observation of his art pieces. Albion is
          an artist who his professional creative career has taken him from
          fashion design to abstract painting to sketching to interior design
          and molding all these together on a piece of canvas or paper curation
          walls and space with the art he makes.
        </p>

        <p className="font-thin mt-5">
          His painting is abstract, expressive, gestural with some figurative
          resurgences ready to hide or be dissolved. He is inspired by the
          humans, the silhouettes, the crowds, the look, the face, the shadow,
          the light, the depth of a conversation. In this way, he approaches the
          relationship of the individual to the world, the fragile human
          condition. He likes the freedom of the line, of shape, it is an
          intuitive painting, a fight between chaos and order, between simple
          and complex. Large scale is his specialty, but he has collected
          numerous pieces on the smaller scale as well
        </p>

        <p className="font-thin mt-5">
          His work is held in private collections in the US and Europe. Part of
          the galleries and beautifully curated homes all around. Currently
          sharing his life between NYC and Martha&apos;s Vineyard where he
          operates as an artist.
        </p>
        <p className="font-thin mt-5">
          Color is the essence of beauty and energy that permeates our world. It
          has the remarkable ability to evoke emotions and stir deep feelings
          within us. I have always been captivated by the interplay of color and
          shape. When these two elements converge, the possibilities for
          creating art become boundless. For me personally, however, painting
          transcends the mere combination of color and shape. It is a process
          that begins with an emotion or feeling, which then spills out onto the
          canvas. I connect with different cultures, different people and give
          them a piece of me from who they are as a reflection of admiration for
          something different. For a difference.
        </p>
        <p className="font-thin mt-5">
          Some of my paintings emerge from spontaneous impulses, where my inner
          emotions take control and guide my paintbrush. They become raw
          expressions of my inner self. Other artworks are journeys of
          exploration, even surprising me with their unfolding pathways. Through
          my paintings, I strive to convey my own perspective of the world and
          create an emotional connection with the viewer. I aspire to capture
          fleeting moments and freeze them in time on the canvas, inviting
          others to share in the experience.
        </p>
        <p className="font-thin mt-5 mb-5">
          Painting allows me to communicate beyond words, to communicate in the
          language of colors, shapes, and emotions. It is a profound and
          intimate means of expression, enabling me to convey the depth of my
          perception and invite others to join me on this artistic journey. It’s
          a form of meditation for me and it has been so for over +15 years now.
          It simply takes over me. “It takes me to start painting so I can stop
          everything around me move.”
        </p>
      </div>
    </article>
  );
}
/* 
ARTISTS STATEMENT:

Color is the essence of beauty and energy that permeates our world. It has the remarkable ability to evoke emotions and stir deep feelings within us. I have always been captivated by the interplay of color and shape. When these two elements converge, the possibilities for creating art become boundless. For me personally, however, painting transcends the mere combination of color and shape. It is a process that begins with an emotion or feeling, which then spills out onto the canvas.
I connect with different cultures, different people and give them a piece of me from who they are as a reflection of admiration for something different. For a difference. 

Some of my paintings emerge from spontaneous impulses, where my inner emotions take control and guide my paintbrush. They become raw expressions of my inner self. Other artworks are journeys of exploration, even surprising me with their unfolding pathways. Through my paintings, I strive to convey my own perspective of the world and create an emotional connection with the viewer. I aspire to capture fleeting moments and freeze them in time on the canvas, inviting others to share in the experience.

Painting allows me to communicate beyond words, to communicate in the language of colors, shapes, and emotions. It is a profound and intimate means of expression, enabling me to convey the depth of my perception and invite others to join me on this artistic journey. It’s a form of meditation for me and it has been so for over +15 years now. It simply takes over me.
“It takes me to start painting so I can stop everything around me move.”
 */
