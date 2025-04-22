import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    // Adaptado para documentación sobre Inspector de Elementos
    title: 'Uso Básico e Interfaz',
    Svg: require('@site/static/img/primera.svg').default, // Puedes cambiar esta imagen por una más relevante si tienes
    description: (
      <>
        Comprende la interfaz principal del Inspector de Elementos y aprende
        los pasos básicos para seleccionar e inspeccionar elementos HTML en la página.
      </>
    ),
  },
  {
    // Adaptado para documentación sobre Inspector de Elementos
    title: 'Estilos CSS y Layout',
    Svg: require('@site/static/img/segunda.svg').default, // Puedes cambiar esta imagen
    description: (
      <>
        Explora a fondo la pestaña de Estilos. Aprende cómo ver, entender,
        y modificar las reglas CSS y la disposición (layout) de los elementos
        directamente desde el navegador.
      </>
    ),
  },
  {
    // Adaptado para documentación sobre Inspector de Elementos
    title: 'Consola y Depuración JavaScript',
    Svg: require('@site/static/img/tercera.svg').default, // Puedes cambiar esta imagen
    description: (
      <>
        Descubre cómo usar la Consola del Inspector para ejecutar código JavaScript,
        entender errores, y depurar scripts de manera efectiva en tus proyectos web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* La clase styles.featureSvg controla el tamaño del icono desde el CSS */}
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
