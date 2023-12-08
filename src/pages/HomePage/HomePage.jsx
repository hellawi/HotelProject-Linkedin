import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { Images03, Images04 } from "../../components/Carousel/Images";
import ImageCarousel from "../../components/Carousel/ImageCarousel/ImageCarousel";
import OverlayBg from "../../components/OverlayBg/OverlayBg";
function HomePage() {
  const { t } = useTranslation();
  const [imagesStandard, setImagesStandard] = useState([]);
  useEffect(() => {
    setImagesStandard(Images04);
  }, []);
  return (
    <div>
      <OverlayBg />
      <main className={styles["main-box"]}>
        <h1 className="heading">{t("aboutus")}</h1>
        <div className={styles["aboutus-text-main"]}>
          <img
            src="/apart.jpeg"
            alt=""
            className={styles["aboutus-img-fasad"]}
          />
          <p className={styles["aboutus-textt-main"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a
            repudiandae aperiam soluta? Illum asperiores labore placeat rem
            consequuntur in modi enim natus iusto dolorum blanditiis illo vitae,
            dolores, atque vel nemo possimus quo? Fuga quo sint voluptatum
            cumque tenetur placeat a eum corporis atque iusto facere voluptas
            non, mollitia, iste similique, quibusdam culpa ipsum aliquam!
            Inventore deserunt consequatur obcaecati quae, dicta ducimus! Ex
            ullam quisquam sequi quis harum labore dignissimos ab. Ea, nam
            veniam, dolorem reprehenderit iusto a, asperiores excepturi
            blanditiis explicabo ipsa maiores ducimus fugit quibusdam nihil
            voluptate corporis deleniti incidunt sint! Perferendis aliquid
            explicabo officia repellendus! Sit.
          </p>
        </div>
        <div className={styles["image-carousel-box"]}>
          <ImageCarousel images={imagesStandard} width="650px" />
        </div>
      </main>
    </div>
  );
}
export default HomePage;
