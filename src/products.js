// import { addDoc, collection } from "firebase/firestore"
// import { db } from './services/firebase/index'

const products = [
    {
        order: "1",
        author: "Frances Hodgson Burnett",
        title: "The Secret Garden",
        lang: "en",
        categories: ["novela", "juvenil", "aventura"],
        description: "Un clásico entrañable cuya vigencia permanece intacta. Mary Lennox tiene diez años y ha perdido a sus padres por culpa de una epidemia que ha azotado la India. Tras su defunción, Mary viaja desde el país del Ganges a Inglaterra para instalarse en la mansión de su tío, una imponente casa de casi cien habitaciones. Allí descubrirá un jardín misterioso cerrado con llave cuyo acceso está completamente prohibido. Un lugar mágico que jamás habría podido imaginar. En contacto con la naturaleza y en compañía de dos niños, Mary vivirá una serie de cambios decisivos.",
        img: "/images/hodgson-burnett_the-secret-garden.jpeg",
        price: 5801,
        stock: 5
    },
    {
        order: "2",
        author: "Jane Austen",
        title: "Pride and Prejudice",
        lang: "en",
        categories: ["novela", "romance"],
        description: "Una joya de la literatura en un diseño lujoso y único de Marjolein Bastin. La serie Clásicos de Marjolein Bastin es una oportunidad para redescubrir la literatura clásica en volúmenes coleccionables y lujosamente ilustrados. Por primera vez, la obra de arte internacionalmente célebre de Marjolein Bastin adorna las páginas de un clásico atemporal, Orgullo y prejuicio, la historia perdurable de las hermanas Bennet y su búsqueda de matrimonios adecuados. Más allá de dar vida a estas historias, la serie de Bastin agrega elementos efímeros elaboradamente diseñados, como mapas de cuatro colores, letras, árboles genealógicos y partituras. Ya sea un regalo ideal para un devoto de Austen o Bronte o un regalo para usted, la serie Marjolein Bastin Classics, en conjunto o comprada individualmente, es perfecta para cualquier persona que sienta una conexión con estas joyas literarias perdurables.",
        img: "/images/austen_pride-and-prejudice.jpg",
        price: 10665,
        stock: 5
    },
    {
        order: "3",
        author: "Jane Austen",
        title: "Orgullo y Prejuicio",
        lang: "es",
        categories: ["novela", "romance"],
        description: "Nominada por los estadounidenses como una de las 100 mejores novelas en la serie de PBS The Great American Read Penguin Clásicos publica en una cuidada edición esta obra maestra de la literatura inglesa de todos los tiempos, para conmemorar el bicentenario de la publicación original de la novela en 1813. A lo largo de una trama que discurre con la precisión de un mecanismo de relojería, Jane Austen perfila una galería de personajes que conforman un perfecto y sutil retrato de la época: las peripecias de una dama empeñada en casar a sus hijas con el mejor partido de la región, los vaivenes sentimentales de las hermanas, el oportunismo de un clérigo adulador... El trazado de los caracteres y el análisis de las relaciones humanas sometidas a un rígido código de costumbres, elementos esenciales de la narrativa de la autora, alcanzan en Orgullo y prejuicio cotas de maestría insuperable.«Pero mi locura no ha sido el amor sino la vanidad.»",
        img: "/images/austen_orgullo-y-prejuicio.jpg",
        price: 4487,
        stock: 12
    },
    {
        order: "4",
        author: "Jane Austen",
        title: "Emma",
        lang: "en",
        categories: ["novela", "romance", "comedia"],
        description: "Jane Austen se burlaba de los lectores con la idea de una \"heroína a la que nadie más que yo querría mucho\", pero Emma es irresistible. \"Guapa, inteligente y rica\", Emma también es una \"imaginista\", \"en llamas de especulación y previsión\". Ve signos de romance a su alrededor, pero cree que nunca se casará.",
        img: "/images/austen_emma_eng.jpg",
        price: 3599,
        stock: 7
    },
    {
        order: "5",
        author: "Jane Austen",
        title: "Emma",
        lang: "es",
        categories: ["novela", "romance", "comedia"],
        description: "Emma cuenta la historia de una inteligente y laboriosa joven empeñada en hacer de celestina de todas sus amistades. Cuando su institutriz, amiga y confidente decide contraer matrimonio, Emma Woodhouse se descubrirá sola, frente al vacío de su vida y con la penosa tarea de intentar que los demás lleven una vida tan perfecta como la suya. Pero todos sus esfuerzos de manipulación sentimental tan solo consiguen crear a su alrededor una telaraña de enredos, malentendidos y confusiones que pone a prueba su confianza en sí misma.",
        img: "/images/austen_emma_esp.jpg",
        price: 4663,
        stock: 10
    },
    {
        order: "6",
        author: "Jane Austen",
        title: "Sense & Sensibility",
        lang: "en",
        categories: ["novela", "romance"],
        description: "Sentido y sensibilidad es una deliciosa comedia de modales en la que las hermanas Elinor y Marianne representan estas dos cualidades. El personaje de Elinor es de desapego augusto, mientras que Marianne, una ferviente discípula de la época romántica, aprende a controlar su naturaleza apasionada en aras de la supervivencia.",
        img: "/images/austen_sense-and-sensibility.jpg",
        price: 3599,
        stock: 8
    },
    {
        order: "7",
        author: "Jane Austen",
        title: "Sentido y Sensibilidad",
        lang: "es",
        categories: ["novela", "romance"],
        description: "«La pongo al par de Shakespeare, Cervantes y Henry Fielding». Henry James\n\nEn Sentido y sensibilidad, Jane Austen explora con sutileza e ironía las opciones de la mujer en una sociedad rígida, donde el éxito o el fracaso depende de la elección del marido. La historia se centra en dos hermanas, Elinor y Marianne, las personalidades antagónicas ejemplifican dos posibles respuestas femeninas ante la hipocresía dominante: el «sentido común» y la «sensibilidad». Sin embargo, tanto un camino como el otro entrañan sus peligros. Esta edición incorpora una cronología detallada y recupera la introducción de la edición original de Penguin Clásicos a cargo de Tony Tanner, uno de los mayores especialistas en la obra de Jane Austen, a cuyo estudio dedicó gran parte de su carrera. Fue catedrático de literatura inglesa y norteamericana en la Universidad de Cambridge.\n\n«Venga, entre amigos no hay secretos».",
        img: "/images/austen_sentido-y-sensibilidad.jpg",
        price: 4301,
        stock: 23
    },
    {
        order: "8",
        author: "Jane Austen",
        title: "Persuasion",
        lang: "en",
        categories: ["novela", "romance"],
        description: "¿Qué significa persuasión, una creencia firme o la acción de persuadir a alguien para que piense en otra cosa? Anne Elliot es una de las heroínas más tranquilas de Austen, pero también una de las más fuertes y abiertas al cambio. Vive en la época de las guerras napoleónicas, una época de accidentes, aventuras, la creación de nuevas fortunas y alianzas.",
        img: "/images/austen_persuasion_eng.jpg",
        price: 3599,
        stock: 13
    },
    {
        order: "9",
        author: "Jane Austen",
        title: "Persuasión",
        lang: "es",
        categories: ["novela", "romance"],
        description: "La última y conmovedora novela de Jane Austen, publicada póstumamente en 1818.\n\nPersuasión narra la historia de una mujer madura, sensible y menospreciada, que años después de dejarse persuadir para rechazar al hombre que amaba, lo ve reaparecer en su vida, rico y honorable pero aún despechado. Quizá por primera vez en la historia de la novela, la mujer debe luchar para que el amor le conceda una segunda oportunidad. Esta obra de madurez está considerada una de las novelas más oscuras de Jane Austen, y es sin duda la más crítica con la sociedad de suépoca.\n\nLa presente edición incorpora una detallada cronología de la autora. Asimismo, cuenta con una magnífica introducción de la crítica y académica Gilliam Beer, especialista en el campo de la novela victoriana y doctora honoris causa en literatura por las universidades de Oxford y Harvard.\n\n«Obligada a conducirse prudentemente en su juventud, con la edad se volvía cada vez más romántica: esa era la consecuencia lógica de su iniciación antinatural.»",
        img: "/images/austen_persuasion_esp.png",
        price: 4065,
        stock: 5
    },
    {
        order: "10",
        author: "Jane Austen",
        title: "The Jane Austen Collection",
        lang: "en",
        categories: ["coleccion", "novela"],
        description: "Este conjunto en caja contiene los seis títulos más queridos de Jane Austen:\n\n<b>Sentido y Sensibilidad</b>\nSense and Sensibility, una de las historias más queridas de Jane Austen, cuenta la historia de las hermanas Dashwood, Elinor y Marianne. Casi sin dinero por la muerte de su padre, confían en la amabilidad de sus familiares y amigos para encontrar un nuevo hogar junto con su madre y su hermana menor. Cada uno necesita resolver sus problemas casándose bien, pero el destino los lleva por un camino lleno de baches por el cual la apasionada pero impetuosa Marianne se enamora de Willoughby, mientras que Elinor, siempre cautelosa, parece tener mala suerte en el amor. Como siempre, Austen resuelve la fortuna de sus heroínas de una manera inimitable e ingeniosa.\n\n<b>Emma</b>\nBella, inteligente, rica y soltera, Emma Woodhouse está perfectamente contenta con su vida y no ve la necesidad de amor ni de matrimonio. Sin embargo, nada la deleita más que interferir en la vida romántica de los demás. Pero cuando ignora las advertencias de su buen amigo, el Sr. Knightley e intenta arreglar una pareja adecuada para su protegida Harriet Smith, sus planes cuidadosamente elaborados pronto se desmoronan y tienen consecuencias que nunca esperó. Con su heroína imperfecta pero encantadora y su exploración ingeniosa y sutil de las relaciones, Emma es vista a menudo como el trabajo más perfecto de Jane Austen.\n\n<b>Persuasión</b>\nA medida que las guerras napoleónicas llegan a su fin en 1814, los almirantes y capitanes de la Royal Navy son llevados a tierra, su trabajo realizado. Anne Elliot se encuentra con el Capitán Frederick Wentworth después de siete años, por la posibilidad de que su hermana y su cuñado renten la propiedad de su padre, mientras ella se queda unos meses con su hermana casada, que vive cerca. Se enamoraron la primera vez, pero ella rompió el compromiso.\n\n<b>Parque Mansfield</b>\nLos parientes ricos de Fanny Price le ofrecen un lugar en su casa para que pueda ser criada adecuadamente. Sin embargo, la infancia de Fanny es solitaria, ya que nunca se le permite olvidar su posición. Su único aliado es su primo Edmund. Cuando sus primos se hacen amigos de dos jóvenes glamorosos que han llegado a la zona, Henry y Mary Crawford, Edmund comienza a acercarse a Mary y Fanny se encuentra lidiando con sentimientos que nunca antes había experimentado.\n\n<b>Orgullo y Prejuicio</b>\nCuando Elizabeth Bennet conoce por primera vez al soltero elegible Fitzwilliam Darcy, ella lo considera arrogante y engreído; él es indiferente a su buen aspecto y mente viva. Cuando más tarde descubre que Darcy se ha involucrado en la problemática relación entre su amigo Bingley y su amada hermana Jane, está decidida a que no le guste más que nunca. En la brillante comedia de modales que sigue, Jane Austen muestra la locura de juzgar por las primeras impresiones y evoca magníficamente las amistades, los chismes y los esnobismos de la vida de la clase media provincial.\n\n<b>Abadía de Northanger</b>\nNorthanger Abbey cuenta la historia de una joven, Catherine Morland, que abandona su hogar rural y protegido para ingresar al sofisticado mundo de Bath a fines de la década de 1790. Austen observa con perspicacia y humor la interacción entre Catherine y los diversos personajes que conoce allí, y rastrea su creciente comprensión del mundo sobre ella.\n\nEstuche de lujo que contiene 6 de las novelas más vendidas de Jane Austen. Con bonitas fijaciones de tela y nuevas cubiertas contemporáneas, es el regalo perfecto para los amantes de la literatura clásica inglesa.",
        img: "/images/austen_collection.jpg",
        price: 20436,
        stock: 5
    },
    {
        order: "11",
        author: "Jane Austen",
        title: "Jane Austen, obra completa",
        lang: "es",
        categories: ["coleccion", "novela"],
        description: "Penguin Clásicos lanza esta maravillosa edición en estuche de la Obra completa de Jane Austen con motivo del bicentenario de la muerte de la autora.\nMansfield Park · Emma · Orgullo y prejuicio · Sentido y sensibilidad · Persuasión · La abadía de Nothanger\n\n<b>Mansfield Park</b>\nFanny Price es aún una niña cuando sus tíos la acogen en su mansión de Mansfield Park, rescatándola de una vida de estrecheces y necesidades. Allí, ante su mirada amedrentada, desfilará un mundo de ocio y refinamiento en que las inocentes diversiones alimentarán maquinaciones y estrategias de seducción. Ese mundo oculta una verdad peligrosa, y solo Fanny, desde su sumiso silencio, será capaz de atisbar sus consecuencias y amenazas.\n\n<b>Emma</b>\nEmma cuenta la historia de una inteligente y laboriosa joven empeñada en hacer de celestina de todas sus amistades. Cuando su institutriz, amiga y confidente decide contraer matrimonio, Emma Woodhouse se descubrirá sola, frente al vacío de su vida y con la penosa tarea de intentar que los demás lleven una vida tan perfecta como la suya. Pero todos sus esfuerzos de manipulación sentimental tan solo consiguen crear a su alrededor una telaraña de enredos, malentendidos y confusiones que pone a prueba su confianza en sí misma.\n\n<b>Orgullo y prejuicio</b>\nA lo largo de una trama que discurre con la precisión de un mecanismo de relojería, Jane Austen perfila una galería de personajes que conforman un perfecto y sutil retrato de la época: las peripecias de una dama empeñada en casar a sus hijas con el mejor partido de la región, los vaivenes sentimentales de las hermanas, el oportunismo de un clérigo adulador... El trazado de los caracteres y el análisis de las relaciones humanas sometidas a un rígido código de costumbres, elementos esenciales de la narrativa de la autora, alcanzan en Orgullo y prejuicio cotas de maestría insuperable.\n\n<b>Sentido y sensibilidad</b>\nEn Sentido y sensibilidad, Jane Austen explora con sutileza e ironía las opciones de la mujer en una sociedad rígida, donde el éxito o el fracaso dependen de la elección del marido. La historia se centra en dos hermanas, Elinor y Marianne, cuyas personalidades antagónicas ejemplifican dos posibles respuestas femeninas ante la hipocresía dominante: el «sentido común» y la «sensibilidad». Sin embargo, tanto un camino como el otro entrañan sus peligros.\n\n<b>Persuasión</b>\nPersuasión narra la historia de una mujer madura, sensible y menospreciada, que años después de haber rechazado al hombre que amaba, persuadida por un mal consejo, ve cómo este reaparece en su vida, rico y honorable pero aún despechado. Una mujer que quizá por primera vez en la historia de la novela debe luchar para que el amor le conceda una segunda oportunidad. Esta obra se considera una de las novelas más oscuras de Jane Austen, sin duda la más crítica con la sociedad de la época.\n\n<b>La abadía de Nothange</b>\nPublicada originariamente en 1818, La abadía de Northanger narra la historia de Catherine Morland, una joven ingenua aficionada a la lectura de novelas góticas. Invitada por los Tilney a pasar una temporada en su casa de campo, se dedicará a investigar tortuosos e imaginarios secretos de familia. Pero cuando finalmente todo se aclare y comprenda que la vida no es una novela, la inocente Catherine pondrá los pies en la tierra y encauzará su futuro según dictan las normas morales y sociales de la época.",
        img: "/images/austen_obra-completa.png",
        price: 20587,
        stock: 5
    },
    {
        order: "12",
        author: "Emily Brontë",
        title: "Wuthering Heights",
        lang: "en",
        categories: ["novela", "teatral"],
        description: "En la única novela de Emily Brontë, la pasión de Catherine y Heathcliff es tan salvaje como los páramos que rodean el hogar de su infancia, Wuthering Heights. Esta oscura historia de amor y pérdida, poder y posesión, acción y reacción aterradora, se erige como una de las mejores obras de ficción en inglés.",
        img: "/images/bronte_wuthering-heights.jpeg",
        price: 6170,
        stock: 14
    },
    {
        order: "13",
        author: "Emily Brontë",
        title: "Cumbres Borrascosas",
        lang: "es",
        categories: ["novela", "teatral"],
        description: "1847 fue un año muy prolífico para las hermanas Brontë, quienes firmaban sus libros como los hermanos Bell para evitar escándalos: Charlotte publicó Jane Eyre; Anne llevó a imprenta Agnes Grey, y Emily editó esta gran obra, Cumbres Borrascosas, que contiene la quinta esencia de la novela romántica inglesa decimonónica. En ella se suceden los amores apasionados, los odios agriados que se prolongan durante generaciones, los celos, las apariciones espectrales y las tormentas, todo ello narrado con una fuerza que la han convertido en un clásico imperecedero.",
        img: "/images/bronte_cumbres-borrascosas.jpg",
        price: 3299,
        stock: 12
    },
    {
        order: "14",
        author: "Charlotte Brontë",
        title: "Jane Eyre",
        lang: "en",
        categories: ["novela", "romance"],
        description: "Joyas de la literatura en un diseño lujoso y único de Marjolein Bastin.\n\nLa serie Clásicos de Marjolein Bastin es una oportunidad para redescubrir la literatura clásica en volúmenes coleccionables y lujosamente ilustrados. Por primera vez, la obra de arte internacionalmente célebre de Marjolein Bastin adorna las páginas de un clásico atemporal, Jane Eyre, la historia de una huérfana sin un centavo que encuentra el amor y la amistad a pesar de la gran adversidad. Más allá de dar vida a estas historias, la serie de Bastin agrega elementos efímeros elaboradamente diseñados, como mapas de cuatro colores, letras, árboles genealógicos y partituras. Ya sea un regalo ideal para un devoto de Austen o Bronte o un regalo para usted, la serie Marjolein Bastin Classics, en conjunto o comprada individualmente, es perfecta para cualquier persona que sienta una conexión con estas joyas literarias perdurables.",
        img: "/images/bronte_jane-eyre_eng.jpg",
        price: 10536,
        stock: 5
    },
    {
        order: "15",
        author: "Charlotte Brontë",
        title: "Jane Eyre",
        lang: "es",
        categories: ["novela", "romance"],
        description: "Nos hallamos ante una novela adelantada a su tiempo, tanto en lo narrativo como en lo temático, una obra que trasciende el romanticismo al uso para adentrarse en los terrenos autobiográfico e ideológico. El personaje de Jane Eyre es el retrato de una mujer que lucha por su reconocimiento como persona tan válida como cualquier otra. El mensaje está más vigente que nunca.",
        img: "/images/bronte_jane-eyre_esp.jpg",
        price: 5727,
        stock: 9
    },
    {
        order: "16",
        author: "Anne Brontë",
        title: "Agnes Grey",
        lang: "en",
        categories: ["novela"],
        description: "La bien educada hija de un clérigo sin un centavo, Agnes Gray es tratada como una niña por su familia y por eso se propone demostrar su valía buscando empleo como institutriz. Pronto, sin embargo, sus nociones idealistas con respecto a la educación y el cuidado de sus pupilos se desvanecen mientras lucha por controlar a los niños salvajes de Bloomfield en su primera situación, y luego la superior familia Murray la tiene en baja estima.\n\nBasándose en las propias experiencias de Anne Bronte, y tratando temas como la naturaleza de la infancia, el auge de las clases medias y la soledad, la crueldad e incluso los malos tratos que podría conllevar la vida como institutriz, Agnes Gray está llena de silenciosa pasión y permanece. un clásico amado hasta el día de hoy.",
        img: "/images/bronte_agnes-grey_eng.jpg",
        price: 2694,
        stock: 18
    },
    {
        order: "17",
        author: "Anne Brontë",
        title: "Agnes Grey",
        lang: "es",
        categories: ["novela"],
        description: "Con el objetivo de contribuir a la menguada economía familiar y lograr la independencia económica, la protagonista de este relato decide trabajar como institutriz para la familia Bloomfield. Agnes Grey, novela de marcado carácter autobiográfico, nos acerca a la severa realidad de las institutrices victorianas.\n\n«Qué delicioso que sería convertirme en institutriz, salir al mundo, empezar una nueva vida, tomar mis propias decisiones, desarrollar las facultades que tenía sin usar, probar las capacidades que tengo y que no conozco, ganarme mi propio salario. No importaba lo que dijeran los demás, yo me veía perfectamente capacitada para la tarea».",
        img: "/images/bronte_agnes-grey_esp.jpg",
        price: 4578,
        stock: 12
    },
    {
        order: "18",
        author: "Louisa May Alcott",
        title: "Little Women",
        lang: "en",
        categories: ["novela"],
        description: "Durante generaciones, los niños de todo el mundo han alcanzado la mayoría de edad con las niñas March de Louisa May Alcott: la trabajadora hermana mayor Meg, la testaruda e impulsiva Jo, la tímida Beth y la precoz Amy. Con su padre en la guerra y su amada madre Marmee trabajando para mantener a la familia, las cuatro hermanas tienen que depender unas de otras mientras soportan las dificultades de la guerra y la pobreza. Somos testigos de cómo las hermanas crecen y descubren qué papel quiere desempeñar cada una en el mundo y, en el camino, nos unimos a ellas en innumerables aventuras inolvidables.\n\nLectores jóvenes y mayores se enamorarán de este amado clásico, un vivo retrato de la vida familiar del siglo XIX y una novela feminista sobre mujeres jóvenes que desafían las expectativas de la sociedad.",
        img: "/images/may-alcott_little-women.jpeg",
        price: 6820,
        stock: 7
    },
    {
        order: "19",
        author: "Louisa May Alcott",
        title: "Mujercitas",
        lang: "es",
        categories: ["novela"],
        description: "Una preciosa edición ilustrada de Mujercitas, de Louisa May Alcott, una historia universal, apreciada por generaciones de niñas durante más de ciento cincuenta años.\nEl señor March se ha marchado a la guerra y sus cuatro hijas deben quedarse en casa con su madre, su tía y sus amigos, en medio del bullicio de la vida burguesa de Nueva Inglaterra.\nMeg, Beth, Amy y Jo, las cuatro hermanas March, tienen intereses muy distintos, pero juntas viven y sufren los cambios que conllevan hacerse un lugar en el mundo y, lo más complicado de todo, crecer.\nClásicos inolvidables para disfrutar, compartir y dejar volar la imaginación.",
        img: "/images/may-alcott_mujercitas.jpeg",
        price: 6034,
        stock: 12
    },
    {
        order: "20",
        author: "Louisa May Alcott",
        title: "Hombrecitos",
        lang: "es",
        categories: ["novela"],
        description: "Louisa May Alcott se adelantó a su tiempo. Abolicionista y sufragista convencida, consagró su vida y su obra a hacer del mundo un lugar mejor.\nHombrecitos, continuación de la saga iniciada por Mujercitas, se centra en la historia de Jo Bhaer (de soltera, Jo March). La protagonista de Mujercitas vive entregada a los niños de Plumfield, la escuela y guardería que codirige con su marido, Fritz. Gracias a ellos comprendemos que la educación debe ser honesta y garantizar un aprendizaje profundamente humanista.\nUna muestra inmejorable de las inquietudes literarias y pedagógicas de una de las autoras más queridas de todos los tiempos.",
        img: "/images/may-alcott_hombrecitos.jpeg",
        price: 5008,
        stock: 8
    },
    {
        order: "21",
        author: "Antoine de Saint-Exupéry",
        title: "The Little Prince",
        lang: "en",
        categories: ["novela", "juvenil"],
        description: "El Principito es un cuento clásico de igual atractivo para niños y adultos. En un nivel, es la historia del descubrimiento de un aviador, en el desierto, de un niño pequeño de otro planeta, el Principito del título, y sus historias de viajes intergalácticos, mientras que, por otro lado, es una alegoría que invita a la reflexión. de la condición humana. Publicado por primera vez en 1943, un año antes de la muerte del autor en acción, esta traducción contiene las deliciosas ilustraciones de Saint-Exupery.",
        img: "/images/saint-exupery_the-little-prince.jpeg",
        price: 4950,
        stock: 24
    },
    {
        order: "22",
        author: "Antoine de Saint-Exupéry",
        title: "El Principito",
        lang: "es",
        categories: ["novela", "juvenil"],
        description: "Antoine de Saint-Exupéry tuvo una vida fascinante y una muerte mítica. Piloto comercial, reportero de viajes y activista político, ideó El Principito durante sus largos vuelos en solitario por el desierto del Sahara. Si bien la novela de Saint-Exupéry es considerada una obra infantil, contiene reflexiones muy valiosas que permiten abordar temas como la soledad, la amistad, el amor, el egoísmo, el sacrificio, el deber y, sobre todo, la importancia de lo que somos frente a lo que parecemos. El Principito es uno de los libros más profundos y hermosos jamás escritos. Una obra maestra imperecedera que ha cautivado a millones de lectores de todo el mundo, que ahora presentamos con nuevas ilustraciones de Albert Arrayás.",
        img: "/images/saint-exupery_el-principito.png",
        price: 6790,
        stock: 27
    },
    {
        order: "23",
        author: "Lewis Carroll",
        title: "Alice in Wonderland",
        lang: "en",
        categories: ["novela", "juvenil", "fantasia"],
        description: "Con una introducción y notas de Michael Irwin, profesor de literatura inglesa, Universidad de Kent en Canterbury. Tweedledum y Tweedledee, el Sombrerero Loco, el Gato de Cheshire, la Reina Roja y el Conejo Blanco hacen su aparición, y ahora son figuras conocidas por escrito, conversación e idioma. También lo son los deliciosos versos de Carroll como The Walrus and the Carpenter y la jerga inspirada de esa magistral parodia de Wordsworth, The Jabberwocky.",
        img: "/images/carroll_alice-in-wonderland.jpg",
        price: 3599,
        stock: 10
    },
    {
        order: "24",
        author: "Lewis Carroll",
        title: "Alicia en el País de las Maravillas",
        lang: "es",
        categories: ["novela", "juvenil", "fantasia"],
        description: "La historia de las extraordinarias aventuras de Alicia en una tierra de fantasía se ha convertido en uno de los libros infantiles más famosos de todos los tiempos. Los personajes extravagantes y las situaciones absurdas que Alice enfrenta en su camino continúan fascinando a los lectores empujando los límites de la lógica y el lenguaje. Esta edición presenta las ilustraciones originales que acompañaron la primera publicación del texto en 1865.",
        img: "/images/carroll_alicia-pais-maravillas.jpg",
        price: 4036,
        stock: 12
    },
    {
        order: "25",
        author: "Lucy M. Montgomery",
        title: "Anne of Green Gables",
        lang: "en",
        categories: ["novela", "juvenil"],
        description: "El hermano y la hermana Marilla y Matthew Cuthbert esperan conocer al joven huérfano a quien esperan darle una buena vida en su granja de Avonlea, Green Gables. En cambio, cuando son enviados accidentalmente a Anne Shirley, aprovechan al máximo el error del orfanato y dan la bienvenida a la niña imaginativa con brazos amorosos. Bajo su cuidado y a través de las amistades que forja en la escuela, Anne disfruta de aventuras y experiencias que le enseñan a cambio a ser amorosa y afectuosa.\nPublicado por primera vez en 1908, Anne of Green Gables, de L. M. Montgomery, es una historia muy apreciada sobre la importancia de la familia y la comunidad. Esta edición presenta ilustraciones clásicas de M. A. y W. A. J. Claus.",
        img: "/images/montgomery_anne-green-gables.jpg",
        price: 8426,
        stock: 6
    },
    {
        order: "26",
        author: "Lucy M. Montgomery",
        title: "Ana de Tejas Verdes",
        lang: "es",
        categories: ["novela", "juvenil"],
        description: "Ana de Tejas Verdes es la primera de las nueve novelas en las que Lucy Maud Montgomery narra la vida de Ana Shirley, una niña de once años que deja el orfanato para irse a vivir a Tejas Verdes, la granja de los hermanos Cuthbert. Gracias a su carácter imaginativo, inteligente, alegre, fuerte y luchador, se gana no solo el corazón de su familia adoptiva, Matthew y Marilla, sino también el de todos los habitantes de Avonlea.",
        img: "/images/montgomery_ana-tejas-verdes.jpeg",
        price: 5617,
        stock: 11
    },
    {
        order: "27",
        author: "William Shakespeare",
        title: "Romeo and Juliet",
        lang: "en",
        categories: ["teatral", "romance"],
        description: "Romeo y Julieta es la tragedia clásica de William Shakespeare sobre una pareja de amantes cruzados por las estrellas cuyo romance se complica por el odio mutuo de sus familias. Escrita en la década de 1590, fue, y sigue siendo, una de las obras de teatro más populares de Shakespeare. A través de los siglos, sus personajes se han convertido en encarnaciones icónicas del amor juvenil idealizado. Romeo y Julieta es una de las ediciones de bolsillo de colección de Barnes & Noble. Cuenta con una elegante encuadernación de cuero regenerado, una cubierta decorativa estampada en aluminio y bordes dorados distintivos. Duradero y coleccionable, pone un clásico de la literatura en la palma de sus manos.",
        img: "/images/shakespeare_romeo-and-juliet.jpg",
        price: 3356,
        stock: 21
    },
    {
        order: "28",
        author: "William Shakespeare",
        title: "Romeo y Julieta",
        lang: "es",
        categories: ["teatral", "romance"],
        description: "Como una de las tragedias más famosas de Bard, Romeo y Julieta ha cautivado los corazones de generaciones enteras de lectores y espectadores. La historia del amor condenado entre los jóvenes amantes Romeo Montesco y Julieta Capuleto sigue siendo tan conmovedora como lo fue hace más de cinco siglos, y el final infeliz, familiar para muchos, todavía tiene el poder de tocar un acorde suave. El corazón de cada lector.",
        img: "/images/shakespeare_romeo-y-julieta.jpg",
        price: 4099,
        stock: 25
    },
    {
        order: "29",
        author: "William Shakespeare",
        title: "Hamlet",
        lang: "es",
        categories: ["teatral"],
        description: "HAMLET, la obra más conocida de Shakespeare, es en realidad una pieza llena de lagunas e indefiniciones. Una obra enigmática y misteriosa, en la que cada personaje es un artista de la simulación. El propio Hamlet es un ser en continua transformación. En él caben la ceremoniosidad, la cortesía y la reflexión, junto a la pasión, la burla, el enigma o la posibilidad de la locura. En el castillo de Elsenor, en un ambiente que emana corrupción y desconfianza, claustrofóbico y hostil, se alternan escenas solemnes y reveses irónicos, al tiempo que se agita una corte de personajes cuyo sentido último será llevar a Hamlet a vencer su tensión interna y cumplir la venganza por la muerte de su padre. El magnífico estudio de Ángel-Luis Pujante que precede su traducción analiza el carácter incoherente e incierto de la tragedia y sitúa el atractivo de una obra tan compleja y rica en ese halo de misterio que suscita la duda, requiere la meditación y que la ha convertido en uno de los grandes mitos de Occidente.",
        img: "/images/shakespeare_hamlet.jpg",
        price: 4194,
        stock: 28
    },
    {
        order: "30",
        author: "William Shakespeare",
        title: "William Shakespeare - Tragedies",
        lang: "en",
        categories: ["teatral", "coleccion"],
        description: "Doce de los dramas más profundos y conmovedores de Shakespeare en un volumen elegante. Las tragedias de William Shakespeare presentaron al mundo a algunos de los personajes más conocidos de la literatura, incluidos Romeo, Julieta, Macbeth, Hamlet, King Lear y Othello. Este hermoso volumen de Word Cloud incluye las doce obras del primer folio que comúnmente se clasifican como tragedias, pero los sentimientos que las palabras de Shakespeare pueden evocar abarcan todo el espectro de las emociones humanas.",
        img: "/images/shakespeare_tragedies.jpg",
        price: 5871,
        stock: 5
    },
    {
        order: "31",
        author: "Gaston Leroux",
        title: "The Phantom of the Opera",
        lang: "en",
        categories: ["novela"],
        description: "La clásica historia de un peligroso triángulo amoroso ambientada en una ópera de París de la década de 1890. Se rumorea que está encantada, la ópera Palais Garnier en el París del siglo XIX es el escenario de esta historia de un peligroso triángulo amoroso que involucra a una joven soprano sueca, su misterioso tutor \"Fantasma\" y su amiga de la infancia. Cuando Carlotta, la soprano principal, se enferma y la interpretación de suplente de Christine Daaé es un gran éxito, el vizconde Raoul de Chagny se enamora de Christine. Mientras tanto, su tutor, \"el ángel de la música\", a quien cree que ha sido enviado por su difunto padre, también está codiciando el afecto de Christine. Pero el ángel no es un fantasma como todo el mundo cree, y sus miedos al rechazo de Christine debido a su desfiguración enmascarada lo llevan a secuestrarla y extraer una promesa de matrimonio nacida de celos salvajes. Esta última incorporación a la serie Word Cloud Classic hará que quemes las velas hasta alcanzar el final oscuro y gótico.",
        img: "/images/leroux_phantom-of-the-opera.jpg",
        price: 3627,
        stock: 13
    },
    {
        order: "32",
        author: "Gaston Leroux",
        title: "El Fantasma de la Ópera",
        lang: "es",
        categories: ["novela"],
        description: "La Ópera de París se convierte en teatro de horrores en la más célebre obra del periodista y escritor de novelas detectivescas Gaston Leroux. En un ambiente de novela gótica, su escenario esconde tras sus tramoyas la morada del Fantasma: pasadizos secretos que serpentean alrededor de un lago subterráneo.\nEsta fascinante historia recrea el mito de la Bella y la Bestia: una joven y delicada artista es el objeto de amor un tenebroso ser que oculta su identidad tras una máscara. Para conseguir a su amada Christine, una bailarina convertida en diva, este ser atormentado por su deformidad y fealdad revive su pasado de inventor de trampas y mazmorras.\nPublicada por primera vez por entregas en 1909, El fantasma de la Ópera es uno de los argumentos preferidos del teatro y el cine por el misterio de la trama, la progresión del horror, el extremado y melodramático amor del protagonista y las imaginativas posibilidades del espacio creado por Leroux. Su fama se revalida en el éxito mundial del musical de Andrew Lloyd Weber que sigue en las tablas desde 1986.",
        img: "/images/leroux_fantasma-de-la-opera.jpg",
        price: 4442,
        stock: 17
    },
    {
        order: "33",
        author: "Oscar Wilde",
        title: "The Picture of Dorian Gray",
        lang: "en",
        categories: ["novela"],
        description: "Dorian Gray es el tema de un retrato de cuerpo entero al óleo de Basil Hallward, un artista impresionado y encaprichado por la belleza de Dorian; él cree que la belleza de Dorian es responsable del nuevo estado de ánimo en su arte como pintor. A través de Basil, Dorian conoce a Lord Henry Wotton, y pronto queda cautivado por la visión hedonista del mundo del aristócrata: que la belleza y la satisfacción sensual son las únicas cosas que vale la pena perseguir en la vida. Al comprender nuevamente que su belleza se desvanecerá, Dorian expresa el deseo de vender su alma para asegurarse de que la imagen, en lugar de él, envejezca y se desvanezca. El deseo es concedido, y Dorian persigue una vida libertina de variadas experiencias amorales mientras se mantiene joven y hermoso; mientras tanto, su retrato envejece y registra cada pecado.",
        img: "/images/wilde_picture-dorian-grey.jpeg",
        price: 5728,
        stock: 9
    },
    {
        order: "34",
        author: "Oscar Wilde",
        title: "El Retrato de Dorian Gray",
        lang: "es",
        categories: ["novela"],
        description: "El irlandés Oscar Wilde (1854-1900) fue uno de los grandes agitadores culturales de su época. Autor polifacético y versátil, cultivó con impagable maestría desde el teatro y la poesía hasta la narrativa oriental y el aforismo, el cuento corto o el ensayo.\nDe entre toda su producción, El retrato de Dorian Gray (1890) destaca no sólo por ser su única novela, sino también su trabajo más perdurable. Las desventuras de Dorian Gray, ese dandi paradigmático y ocurrente obsesionado con lo efímero, y su pánico a envejecer nos deparan la más genial y absorbente de las vueltas de tuerca que nunca se le hayan dado a la novela fáustica.",
        img: "/images/wilde_retrato-dorian-grey.jpg",
        price: 3546,
        stock: 12
    },
    {
        order: "35",
        author: "Mary Shelley",
        title: "Frankenstein",
        lang: "en",
        categories: ["terror", "novela", "ciencia-ficcion"],
        description: "Horror. Romance. Ciencias. ¡Un cuento clásico que sería un susto perderse! La idea de la historia se le ocurrió a la autora, Mary Shelley, en un sueño que tuvo sobre un científico que había creado la vida y estaba horrorizado por lo que había hecho. Este romance de estilo gótico se encuentra entre las primeras de las verdaderas novelas de ciencia ficción, si no la primera. Un joven científico llamado Victor Frankenstein, después de pasar por su propia experiencia cercana a la muerte, decide jugar a ser Dios y crear vida en la forma de una criatura grotesca, que se convierte en una pesadilla. A través de su experiencia, aprende que el regalo de la vida es precioso, no desechable. Su viaje y transformación personal ha afectado profundamente a los lectores.",
        img: "/images/shelley_frankenstein_eng.jpg",
        price: 3627,
        stock: 10
    },
    {
        order: "36",
        author: "Mary Shelley",
        title: "Frankenstein",
        lang: "es",
        categories: ["terror", "novela", "ciencia-ficcion"],
        description: "Durante el lluvioso verano de 1816, cuatro de los escritores ingleses más talentosos de su tiempo se dieron cita en Villa Diodati. La mansión a orillas del lago Ginebra fue el escenario en el que Lord Byron, John Polidori, Percy Bysshe Shelley y su esposa Mary se retaron a escribir una historia de terror. Aquel juego llevó a la autora londinense a crear este relato, considerada la primera novela dentro del género de la ciencia ficción, que narra el intento de un joven estudiante de medicina de crear vida artificial y las terribles consecuencias de su experimento. Así nacerá Frankenstein, una de las grandes cimas del horror gótico y una brillante reflexión sobre la ética científica.",
        img: "/images/shelley_frankenstein_esp.jpg",
        price: 2799,
        stock: 20
    },
    {
        order: "37",
        author: "Bram Stoker",
        title: "Drácula",
        lang: "es",
        categories: ["terror", "novela"],
        description: "Drácula es una estremecedora novela magistral en la que se concitan los grandes ejes temáticos de la novela vampírica por antonomasia: la lucha entre el bien y el mal y la sexualidad del vampiro, con una estética victoriana y un despliegue estilístico abrumador. Una bella historia de amor, al tiempo que terrorífica, estremecedora y original convertida en una obra de referencia y en un clásico indiscutible e imperecedero dentro del género de terror.",
        img: "/images/stoker_dracula_esp.jpg",
        price: 3299,
        stock: 14
    },
    {
        order: "38",
        author: "Edgar Allan Poe",
        title: "El Cuervo",
        lang: "es",
        categories: ["terror"],
        description: "Edgar Allan Poe, uno de los escritores más destacados del género de terror y autor de culto mundial, escribió uno de los mejores poemas de la historia de la literatura. El presente volumen recoge este y otros de sus poemas más célebres en una edición bilingüe que brinda al lector una oportunidad de disfrutar de la musicalidad, la métrica y la rima originales. El libro incluye un desplegable del poema El cuervo con espléndidas ilustraciones de la artista Sara Morante que lo convierten en un extraordinario libro-objeto imprescindible para todos los amantes de Allan Poe.",
        img: "/images/poe_el-cuervo.jpg",
        price: 3299,
        stock: 12
    },
    {
        order: "39",
        author: "Edgar Allan Poe",
        title: "Cuentos de Edgar Allan Poe",
        lang: "es",
        categories: ["terror", "coleccion", "cuento"],
        description: "Se reúnen en esta edición especial de Austral catorce de los mejores relatos de Edgar Allan Poe (1809-1849), uno de los escritores norteamericanos más destacados. La modernidad de Poe y su sintonía con las preocupaciones de nuestra época hacen de él un autor tan cercano como indispensable, y en estos relatos se aprecian tanto su asombrosa pericia narrativa como su genuino talento para la construcción de tramas de misterio y terror.",
        img: "/images/poe_cuentos.jpg",
        price: 4755,
        stock: 6
    },
    {
        order: "40",
        author: "Edgar Allan Poe",
        title: "Selected Works of Edgar Allan Poe",
        lang: "en",
        categories: ["terror", "coleccion"],
        description: "Estas historias y poemas provienen de la mente de uno de los primeros maestros de la literatura macabra.\nDe lo misterioso a lo macabro, las obras de Edgar Allan Poe tienen el poder de evocar las emociones más profundas de los lectores. Las historias y poemas de Poe exploran el lado más oscuro de la vida y aún ofrecen lecciones y conocimientos sobre el comportamiento humano actual. Esta hermosa edición de Word Cloud presenta muchas de las obras más conocidas de Poe, como \"El cuervo\", \"Los asesinatos en la calle Morgue\", \"El corazón delator\" y \"La caída de la casa Usher\", junto con decenas de otros cuentos y poemas.",
        img: "/images/poe_selected-works.jpg",
        price: 5147,
        stock: 7
    },
    {
        order: "41",
        author: "H. P. Lovecraft",
        title: "Complete Tales of H. P. Lovecraft",
        lang: "en",
        categories: ["terror", "coleccion"],
        description: "Un clásico imprescindible que encantará a todos los fanáticos y coleccionistas de Lovecraft. De la serie Timeless Classics, suntuosamente diseñada, The Complete Tales of H.P. Lovecraft recoge la novela del autor, cuatro novelas y cincuenta y tres cuentos.\nEscrita entre los años 1917 y 1935, esta colección presenta las criaturas fantásticas y las emociones sobrenaturales características de Lovecraft, así como muchos temas de ciencia ficción horribles y cautelosos que han influido en algunos de los escritores y cineastas de la actualidad, incluidos Stephen King, Alan Moore, F. Paul Wilson, Guillermo del Toro y Neil Gaiman.\nEn este volumen se incluyen The Case of Charles Dexter Ward, The Call of Cthulhu, The Dream-Quest of Unknown Kadath, At the Mountains of Madness, The Shadow Over Innsmouth, The Color Out of Space, The Dunwich Horror y muchos más cabellos -creando cuentos.",
        img: "/images/lovecraft_complete-tales.jpg",
        price: 8139,
        stock: 8
    },
    {
        order: "42",
        author: "Robert L. Stevenson",
        title: "El Extraño Caso del Dr. Jekyll y Mr. Hyde",
        lang: "es",
        categories: ["novela", "policial"],
        description: "Robert Louis Stevenson fue uno de los gigantes de la novela de aventuras, pero también fue uno de los grandes conocedores de la mentalidad humana, por lo que era de rigor que tarde o temprano escribiera un clásico imperecedero como El extraño caso del doctor Jekyll y el señor Hyde (1886). Lúcido testigo de la Revolución Industrial ocurrió en el Reino Unido, Stevenson reflexiona acerca de los límites del método y de la ética científica, pero, sobre todo y de una manera absorbente e inolvidable, de la dualidad entre el bien y el mal.",
        img: "/images/carroll_alice-in-wonderland.jpg",
        price: 2225,
        stock: 11
    },
    // {
    //     order: "43",
    //     author: "Homero",
    //     title: "The Odyssey",
    //     lang: "en",
    //     categories: ["poesía épica"],
    //     description: "La Odisea revela un orden universal donde los dioses interceden en los destinos de los hombres, los héroes son engañosos y valientes y un viaje por mar se convierte en una prueba de ingenio y resistencia humanos. Después de la caída de Troya, Odiseo zarpa hacia su hogar. Pero acosado por monstruos, sirenas y hechiceras, y a merced del vengativo dios del mar Poseidón, tarda diez años en completar su viaje, incluso cuando una serie de pretendientes intenta cortejar a su esposa Penélope.",
    //     img: "/images/homer_the-odyssey.jpg",
    //     price: 6037,
    //     stock: 6
    // },
    // {
    //     order: "44",
    //     author: "Homero",
    //     title: "Ilíada",
    //     lang: "es",
    //     categories: ["poesía épica"],
    //     description: "La Ilíada de Homero no solo marca el comienzo de la literatura griega, sino también el de la cultura occidental tal y como la conocemos. Literalmente, nuestro mundo sería diferente si Homero no hubiera existido.\nEl genial bardo ciego retrata con maestría la guerra de Troya, las hazañas de los contendientes y las rencillas entre los dioses con una intensidad y una fuerza que todavía conmueven.\nLa Ilíada simboliza como ninguna otra obra el tránsito de la tradición oral a la escrita, la fusión entre el mito y la historia; en resumen, la creación de un lenguaje narrativo y de una estructura mental que siguen vigentes casi tres milenios después.",
    //     img: "/images/homero_iliada.jpg",
    //     price: 5792,
    //     stock: 12
    // },
    {
        order: "45",
        author: "Johann W. Goethe",
        title: "Fausto",
        lang: "es",
        categories: ["teatral"],
        description: "Casi doscientos cincuenta años después del nacimiento de su autor, \"Fausto\" sigue siendo un clásico, pues plantea el problema de los límites y el sentido de la acción humana, y lo hace bajo la parábola del pacto con el diablo. La obra mantiene su vigencia hoy porque, mediante los interrogantes propios de la condición humana, reaviva la inquietud en una época que pretende sentirse ajena a ellos. En realidad, \"Fausto \"reúne dos obras distintas enmarcadas en momentos muy concretos de la historia europea: el posterior a la Revolución Francesa y el de la consiguiente Restauración monárquica. En el drama se citan, igualmente, dos perfiles muy distintos de Goethe (Frankfurt, 1749 - Weimar, 1832): el alma de un joven lleno de desasosiego y la atemperada vejez de un funcionario jubilado. Si a lo largo de sesenta y cuatro años de creación varía el autor, también cambia su personaje. En la primera parte, un triste erudito se lanza a una desesperada acumulación de experiencias. En la segunda, un hombre lúcido cifra su máxima esperanza en crear un pueblo libre en una tierra libre. Una pretenciosa individualidad es sacrificada en aras de una utopía comunitaria por la que siempre merezca la pena luchar.",
        img: "/images/goethe_fausto.jpg",
        price: 4938,
        stock: 16
    },
    {
        order: "46",
        author: "Miguel de Cervantes",
        title: "Don Quijote de la Mancha",
        lang: "es",
        categories: ["novela", "aventura"],
        description: "«En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no hace mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. »\nEl clásico de las letras españolas entra a formar parte de esta colección única. En el año en que se celebra la efeméride, el cuarto centenario de la publicación de la Segunda parte de El Quijote, presentamos esta obra en edición especial, con la versión a cargo de Alberto Blecua.",
        img: "/images/cervantes_quijote-de-la-mancha.png",
        price: 8087,
        stock: 17
    },
    {
        order: "47",
        author: "Arthur Conan Doyle",
        title: "The Adventures of Sherlock Holmes",
        lang: "en",
        categories: ["policial", "cuento"],
        description: "Durante más de un siglo, las aventuras de Sherlock Holmes han emocionado a los lectores. Este volumen recoge siete de sus casos más desafiantes, incluyendo 'A Scandal in Bohemia', 'The Red-Headed League', 'The Speckled Band', The Five Orange Pips ',' The Blue Carbuncle 'y' The Beryl Coronet '. También presenta la novela, El sabueso de los Baskervflles. Las historias cuentan con el arte de Sidney Paget, quien ilustró las historias de Sherlock Holmes que aparecieron originalmente en The Strand.",
        img: "/images/conan-doyle_adventures-of-sherlock-holmes.jpg",
        price: 5180,
        stock: 8
    },
    {
        order: "48",
        author: "Arthur Conan Doyle",
        title: "Las Aventuras de Sherlock Holmes",
        lang: "es",
        categories: ["policial", "cuento"],
        description: "Edición conmemorativa de los 125 años de la primera publicación, con las ilustraciones originales de Sidney Paget.\n«No se fíe nunca de las impresiones generales, amigo mío, y concéntrese en los detalles.»\nLos primeros relatos protagonizados por el emblemático personaje de Sir Arthur Conan Doyle se reúnen en esta edición conmemorativa para celebrar el 125 aniversario de su primera publicación. Las ilustraciones originales de Sidney Paget acompañan las historias como lo hicieron en la revista Strand a finales del siglo XIX.\nEsta edición permite saborear el atractivo original de un libro que consagró inmediatamente al detective más famoso del mundo. La espléndida traducción de Esther Tusquets acerca a los lectores a algunos de los cuentos de misterio y asesinatos más conocidos de Holmes, como La aventura de la banda de lunares, en el que las últimas palabras de una mujer y un inexplicable silbido en la noche son las únicas pistas, o Las cinco pepitas de naranja, donde una carta desvela una conspiración transatlántica.",
        img: "/images/conan-doyle_aventuras-de-sherlock-holmes.png",
        price: 4287,
        stock: 14
    },
    {
        order: "49",
        author: "Arthur Conan Doyle",
        title: "El Perro de los Baskerville",
        lang: "es",
        categories: ["novela", "policial", "terror"],
        description: "Cuando Sir Charles Baskerville es encontrado muerto en circunstancias extrañas, su médico solicita la ayuda del infame detective privado Sherlock Holmes para resolver el caso. La muerte del noble se ha atribuido al sabueso infernal que ha perseguido a su familia durante generaciones. Pero el astuto detective no está dispuesto a dejar que ninguna superstición interfiera con su genio analítico y evitar que desenmascare al asesino de Sir Charles.",
        img: "/images/conan-doyle_perro-de-los-baskerville.jpg",
        price: 3025,
        stock: 12
    },
    {
        order: "50",
        author: "Jacob y Wilhelm Grimm",
        title: "The Brothers Grimm: 101 Fairy Tales",
        lang: "en",
        categories: ["cuento", "coleccion", "fantasia"],
        description: "Son las historias de personajes que conocemos desde la infancia: Blancanieves, Hansel y Gretel, Cenicienta. Pero las obras originalmente recopiladas por los hermanos Grimm a principios del siglo XIX no son necesariamente las versiones contadas antes de acostarse. Son más oscuros y, a menudo, no terminan muy felizmente, pero a menudo son mucho más interesantes. Esta elegante edición de \"Brothers Grimm: 101 Fairy Tales\" incluye todos nuestros favoritos favoritos: \"La bella durmiente\", \"Rumpelstiltskin\", \"Little Red Cap\" y muchos más, en sus versiones originales. Ahora disponible como parte de la serie Word Cloud Classics, `Brothers Grimm: 101 Fairy Tales` es una adición imprescindible a las bibliotecas de todos los amantes de la literatura clásica. Muchas de estas historias comienzan con el conocido estribillo de \"érase una vez\", ¡pero terminan con algo inesperado y fascinante!",
        img: "/images/grimm_101-fairy-tales.jpg",
        price: 4560,
        stock: 9
    },
    {
        order: "51",
        author: "Jacob y Wilhelm Grimm",
        title: "Cuentos de los Hermanos Grimm",
        lang: "es",
        categories: ["cuento", "coleccion", "fantasia"],
        description: "Las más de doscientas historias que publicaron los hermanos Grimm, de las que ofrecen una selección, son la recopilación de narrativa oral más completa que se ha editado en Europa y, seguramente, la más recordada. ¿Quién no conoce los cuentos de Caperucita y el lobo, Cenicienta, Hansel y Gretel, Rapunzel, o Pulgarcito. Esta edición recupera los crueles textos originales, prevista para un público adulto, de esas historias imperecederas que forman parte de nuestra infancia.",
        img: "/images/grimm_cuentos.jpeg",
        price: 5399,
        stock: 12
    },
    {
        order: "52",
        author: "Charles Perrault",
        title: "Cuentos de Perrault",
        lang: "es",
        categories: ["cuento", "coleccion", "fantasia"],
        description: "Charles Perrault es, junto a los hermanos Grimm y Hans Christian Andersen, uno de los pilares sobre los que se sostienen los cuentos del mundo occidental. En su universo de fantasía mezcló la tradición oral con la recopilación de antiguas leyendas e inauguró un género literario: el de los cuentos de hadas. Sus cuentos, algunos de ellos de gran crudeza, han sido capaces de sobrevivir al paso del tiempo y marcar a decenas de generaciones, puesto que todos ellos contienen enseñanzas valiosas y una frescura que hacen de su lectura un enorme placer.",
        img: "/images/perrault_cuentos.jpg",
        price: 3038,
        stock: 10
    },
    {
        order: "53",
        author: "Lev Tolstoy",
        title: "War and Peace",
        lang: "en",
        categories: ["novela"],
        description: "Una edición de lujo de Penguin Classics de la gran epopeya rusa de Tolstoy. Nominada como una de las novelas más queridas de Estados Unidos por The Great American Read de PBS.\nEn contraste con la panoplia arrolladora de la invasión de Rusia por parte de Napoleón, Guerra y paz, presentada aquí en la primera nueva traducción al inglés en cuarenta años, a menudo se considera la mejor novela jamás escrita. En su centro están Pierre Bezukhov, en busca de sentido en su vida; el cínico príncipe Andrei, ennoblecido por el sufrimiento de la guerra; y Natasha Rostov, cuya impulsividad amenaza con destruir su felicidad. A medida que Tolstoy sigue las cambiantes fortunas de sus personajes, elabora una visión de la humanidad que es a la vez épica e íntima y que continúa definiendo la ficción en su forma más resplandeciente.",
        img: "/images/tolstoy_war-and-peace.jpeg",
        price: 6863,
        stock: 7
    },
    {
        order: "54",
        author: "Lev Tolstoy",
        title: "Guerra y Paz",
        lang: "es",
        categories: ["novela"],
        description: "Guerra y paz se publicó entre los años 1865 y 1869. A lo largo de sus centenares de páginas, Tolstói nos cuenta el relato épico de cinco familias rusas durante la invasión napoleónica. Obra monumental, que incluye a más de quinientos personajes históricos y de ficción, Guerra y paz alterna en su magnífica trama historias familiares con las vicisitudes del ejército napoleónico, la vida en la corte de Alejandro y las batallas de Austerlitz y Borodinó. Como ya advirtió Isaiah Berlin, «nadie ha superado nunca a Tolstói en la expresión del sabor específico, la calidad precisa de un sentimiento, la amplitud de su \"oscilación\". Nadie ha superado su manera de describir la estructura de una situación determinada en todo un período, pasajes ininterrumpidos de la vida de individuos, familias, comunidades, naciones enteras». Guerra y paz, un clásico de la literatura universal, se ha traducido varias veces al español pero la edición que presentamos aquí está basada en la única versión completa y autorizada por Tolstói, en una traducción magistral y totalmente fiable al español por Lydia Kúper.",
        img: "/images/tolstoi_guerra-y-paz.jpg",
        price: 8726,
        stock: 6
    },
    {
        order: "55",
        author: "Fyodor M. Dostoyevsky",
        title: "Crimen y Castigo",
        lang: "es",
        categories: ["novela", "policial"],
        description: "La historia de un doble crimen cometido por un joven y su subsecuente lucha interna con sus emociones y sus delirios.\n«Los personajes no se parecen a nosotros, y no obstante nadie nos habla más adentro que ellos, nadie se parece más a nuestra última verdad», del prólogo de Carlos Pujol.",
        img: "/images/dostoievski_crimen-y-castigo.jpg",
        price: 6936,
        stock: 5
    },
    {
        order: "56",
        author: "George Orwell",
        title: "Animal Farm",
        lang: "en",
        categories: ["novela", "ciencia-ficcion"],
        description: "'Todos los animales son iguales pero algunos animales son más iguales que otros'\nCuando los oprimidos animales de Manor Farm derrocan a su señor Mr Jones y se hacen cargo de la granja, imaginan que es el comienzo de una vida de libertad e igualdad. Pero gradualmente, una élite astuta y despiadada entre ellos, ideada por los cerdos Napoleón y Snowball, comienza a tomar el control. Pronto los otros animales descubren que no son todos iguales como pensaban, y se ven atrapados sin remedio cuando una forma de tiranía es reemplazada por otra.",
        img: "/images/orwell_animal-farm.jpg",
        price: 2688,
        stock: 12
    },
    {
        order: "57",
        author: "George Orwell",
        title: "Nineteen Eighty-Four",
        lang: "en",
        categories: ["novela", "ciencia-ficcion"],
        description: "La obra maestra de George Orwell, ahora en la serie Penguin Clothbound Classics con una cubierta diseñada por Coralie Bickford-Smith.\nUna de las '100 novelas que dieron forma al mundo' de la BBC.\n'Quién controla el pasado controla el futuro: quién controla el presente controla el pasado'.\nEscondido en el Departamento de Archivos del extenso Ministerio de la Verdad, Winston Smith reescribe hábilmente el pasado para satisfacer las necesidades del Partido. Sin embargo, se rebela interiormente contra el mundo totalitario en el que vive, que exige obediencia absoluta y lo controla a través de las telepantallas que todo lo ven y la mirada atenta del Gran Hermano, líder simbólico del Partido. En su anhelo de verdad y libertad, Smith comienza una historia de amor secreta con una compañera de trabajo, Julia, pero pronto descubre que el verdadero precio de la libertad es la traición.\nLa obra maestra distópica de George Orwell, Mil novecientos ochenta y cuatro, es quizás el libro más influyente del siglo XX.",
        img: "/images/orwell_1984_eng.jpg",
        price: 4599,
        stock: 14
    },
    {
        order: "58",
        author: "Neil Gaiman",
        title: "Coraline",
        lang: "es",
        categories: ["novela", "fantasia"],
        description: "Acompaña a Coraline y déjate transportar al mundo de fantasía y terror creado por el premiado autor Neil Gaiman. El libro en que se basó la película.\n«Damas y caballeros, niñas y niños, pónganse en pie y aplaudan: Coraline es una obra maestra.» - Philip Pullman, The Guardian Al día siguiente de mudarse de casa, Coraline explora las catorce puertas de su nuevo hogar. Trece se pueden abrir con normalidad, pero la decimocuarta está cerrada y tapiada. Cuando por fin consigue abrirla, Coraline se encuentra con un pasadizo secreto que la conduce a otra casa tan parecida a la suya que resulta escalofriante. Sin embargo, hay ciertas diferencias que llaman su atención: la comida es más rica, los juguetes son tan desconocidos como maravillosos y, sobre todo, hay otra madre y otro padre que quieren que Coraline se quede con ellos, se convierta en su hija y no se marche nunca. Pronto Coraline se da cuenta de que, tras los espejos, hay otros niños que han caído en la trampa. Son como almas perdidas, y ahora ella es su única esperanza de salvación. Pero para rescatarlos tendrá también que recuperar a sus verdaderos padres, y cumplir así el desafío que le permitirá volver a su vida anterior.",
        img: "/images/gaiman_coraline.jpeg",
        price: 3684,
        stock: 8
    },
    {
        order: "59",
        author: "Herman Melville",
        title: "Moby Dick",
        lang: "es",
        categories: ["novela", "aventura"],
        description: "«El lector, sin duda algo aturdido por su larga navegación, se encuentra abrumado en el trágico final: más adelante, cuando vuelva a abrir Moby Dick, por el comienzo o no, aunque ya sepa todo el desarrollo, no dejará de sentirse de nuevo arrastrado por la voz de Melville a navegar de nuevo, páginas y páginas. Es eso, en definitiva, lo que hace que algunas raras obras sean verdaderamente “clásicas”, esto es, inolvidables y siempre nuevas.»",
        img: "/images/melville_moby-dick_esp.jpg",
        price: 6313,
        stock: 15
    },
    {
        order: "60",
        author: "Charles Dickens",
        title: "A Christmas Carol",
        lang: "en",
        categories: ["novela"],
        description: "\"Cada idiota que anda con 'Feliz Navidad' en sus labios, debe hervirse con su propio budín\"\nLa historia de Charles Dickens sobre Ebenezer Scrooge, que es perseguida por tres espíritus y descubre que el verdadero significado de la Navidad ha tenido, junto con los otros escritos de Navidad de Dickens, una influencia duradera y significativa sobre nuestras ideas sobre la temporada como un momento de celebración, caridad y memoria.",
        img: "/images/dickens_a-christmas-carol.jpg",
        price: 2539,
        stock: 4
    },
    {
        order: "61",
        author: "Charles Dickens",
        title: "Cuentos de Navidad",
        lang: "es",
        categories: ["cuento", "coleccion"],
        description: "La identificación de Dickens (1812-1870) con la Navidad es tal que en alguna ocasión se ha llegado a decir que Dickens inventó la Navidad tal y como la imaginamos hoy, e incluso que Dickens es la Navidad.\nEl presente volumen reúne diez de las mejores historias navideñas que nos dejó. La mayoría son relatos puramente dickensianos, para leer o escuchar al amor de la chimenea: cementerios lúgubres, colegios pobres, la vida del Londres victoriano y algunas sorprendentes aventuras en mares atestados de piratas. Junto a ellos reproducimos algunos relatos más íntimos y personales, meditaciones y reflexiones sentimentales sobre la Navidad y lo que significaba para el gran narrador inglés del siglo XIX.",
        img: "/images/dickens_cuentos-de-navidad.jpg",
        price: 4276,
        stock: 6
    },
    {
        order: "62",
        author: "Charles Dickens",
        title: "Grandes Esperanzas",
        lang: "es",
        categories: ["novela"],
        description: "Grandes esperanzas, considerada como la mejor obra del gran novelista inglés Charles Dickens, contiene muchos elementos autobiográficos del autor, aderezados con su delicioso manejo de la ironía, el misterio, la sátira social y el retrato costumbrista.\nPhilip Pirrip, un huérfano aprendiz de herrero que consigue alcanzar la nobleza, es en gran parte el propio Dickens, pero también un modelo ideal de fuerza, superación y aprendizaje continuo; en resumen, la conmovedora historia de uno de los grandes personajes de la literatura inglesa surgidos de la mente de uno de sus mejores creadores.",
        img: "/images/dickens_grandes-esperanzas.jpg",
        price: 6099,
        stock: 10
    }
]

// export const uploadProducts = () => {
//     console.log('Running code')
    
//     const productsRef = collection(db, 'products')
    
//     products.forEach(async prod => {
//         await addDoc(productsRef, prod)
//     })
// }