const phrases = [
  {
    frase: "Los hábitos son el interés compuesto del automejoramiento.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase: "Los hábitos son el interés compuesto del automejoramiento.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase: "La disciplina es el puente entre las metas y los logros.",
    autor: "Jim Rohn",
    libro: "Frase célebre",
  },
  {
    frase:
      "No es lo que hacemos de vez en cuando lo que da forma a nuestras vidas, sino lo que hacemos consistentemente.",
    autor: "Anthony Robbins",
    libro: "Frase célebre",
  },
  {
    frase:
      "La productividad no es hacer más cosas, es hacer las cosas correctas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "Pequeños cambios, grandes resultados.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase:
      "La motivación te pone en marcha, pero el hábito es lo que te mantiene en movimiento.",
    autor: "Jim Ryun",
    libro: "Frase célebre",
  },
  {
    frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    autor: "Robert Collier",
    libro: "Frase célebre",
  },
  {
    frase: "La calidad de tu vida depende de la calidad de tus hábitos.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "Primero hacemos nuestros hábitos, luego nuestros hábitos nos hacen a nosotros.",
    autor: "John Dryden",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es elegir entre lo que quieres ahora y lo que quieres más.",
    autor: "Abraham Lincoln",
    libro: "Frase célebre",
  },
  {
    frase:
      "Los hábitos son como hilos: cada día tejemos uno hasta que se convierte en una cuerda irrompible.",
    autor: "Horace Mann",
    libro: "Frase célebre",
  },
  {
    frase: "No hay atajos para cualquier lugar que valga la pena visitar.",
    autor: "Beverly Sills",
    libro: "Frase célebre",
  },
  {
    frase: "La excelencia no es un acto, sino un hábito.",
    autor: "Aristóteles",
    libro: "Frase célebre",
  },
  {
    frase:
      "La consistencia es lo que transforma lo ordinario en extraordinario.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "El secreto de tu futuro está escondido en tu rutina diaria.",
    autor: "Mike Murdock",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la magia que hace posibles todas las demás magias.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "Gana el día. Luego gana otro. Ese es el secreto.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el alma de un ejército. Hace pequeños números formidables.",
    autor: "George Washington",
    libro: "Frase célebre",
  },
  {
    frase: "No subestimes el poder de hacer algo pequeño consistentemente.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La fuerza de voluntad es como un músculo: cuanto más lo ejercitas, más fuerte se vuelve.",
    autor: "Roy F. Baumeister",
    libro: "Frase célebre",
  },
  {
    frase: "El hábito es el mejor de los sirvientes o el peor de los amos.",
    autor: "Nathaniel Emmons",
    libro: "Frase célebre",
  },
  {
    frase:
      "La diferencia entre lo que somos y lo que queremos ser está en lo que hacemos diariamente.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el fuego que forja el talento en habilidad.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La rutina, en un hombre inteligente, es una señal de ambición.",
    autor: "W. H. Auden",
    libro: "Frase célebre",
  },
  {
    frase:
      "La constancia es la virtud por la cual todas las demás virtudes dan fruto.",
    autor: "Arturo Graf",
    libro: "Frase célebre",
  },
  {
    frase:
      "El éxito no es casualidad, es trabajo duro, perseverancia, aprendizaje, sacrificio y sobre todo, amor por lo que estás haciendo.",
    autor: "Pelé",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina comienza con el dominio de tus pensamientos.",
    autor: "Napoleón Hill",
    libro: "Frase célebre",
  },
  {
    frase: "No esperes resultados diferentes si siempre haces lo mismo.",
    autor: "Albert Einstein",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de hacerte hacer lo que debes hacer, cuando debes hacerlo, te guste o no.",
    autor: "Elbert Hubbard",
    libro: "Frase célebre",
  },
  {
    frase: "Los hábitos positivos son la base del éxito duradero.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La verdadera prueba no es si evitas el fracaso, sino si dejas que te endurezca o te avergüence.",
    autor: "Robert S. Eliot",
    libro: "Frase célebre",
  },
  {
    frase:
      "La mañana es una parte importante del día, porque la forma en que pasas tu mañana a menudo puede decir qué tipo de día vas a tener.",
    autor: "Lemony Snicket",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el refinamiento del fuego del talento.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La clave no es priorizar lo que está en tu agenda, sino agendar tus prioridades.",
    autor: "Stephen Covey",
    libro: "Los 7 hábitos de la gente altamente efectiva",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre elegir lo que quieres ahora y elegir lo que más quieres.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La consistencia es más importante que la perfección.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el puente entre las intenciones y los logros.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "Los hábitos son las pequeñas decisiones que tomas y las acciones que realizas todos los días.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase:
      "La productividad nunca es un accidente. Siempre es el resultado de un compromiso con la excelencia, la planificación inteligente y el esfuerzo enfocado.",
    autor: "Paul J. Meyer",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el vínculo entre objetivos y logros.",
    autor: "Jim Rohn",
    libro: "Frase célebre",
  },
  {
    frase:
      "La fuerza no proviene de la capacidad física. Proviene de una voluntad indomable.",
    autor: "Mahatma Gandhi",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es cuando tu conciencia te dice que hagas algo y no discutes.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el alma del éxito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La rutina diaria es la arquitectura de la vida.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "El éxito es producto de hábitos diarios, no de transformaciones de una sola vez.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase:
      "La disciplina es el fundamento sobre el cual se construye todo el éxito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La voluntad es esencial, pero es la disciplina lo que te lleva hasta el final.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de recordar lo que realmente quieres.",
    autor: "David Campbell",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de hacer lo que debes hacer, cuando debes hacerlo, te guste o no.",
    autor: "Brian Tracy",
    libro: "Frase célebre",
  },
  {
    frase: "La consistencia es la marca del maestro.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el fuego que forja el talento.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina es la clave para la libertad personal.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "Los hábitos son las invisibles fuerzas que moldean nuestras vidas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el mejor amigo del hombre, porque ella lo lleva a realizar sus mejores sueños.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de actuar independientemente de tu estado emocional.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es la parte más importante del éxito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el puente entre metas y logros.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es la base sobre la cual se construye todo éxito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina es la diferencia entre el éxito y el fracaso.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de hacer lo correcto en el momento correcto.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es la clave para desbloquear tu potencial.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina es el poder que te impulsa hacia tus metas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el secreto detrás de cada gran logro.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de hacer lo que es correcto incluso cuando no tienes ganas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el camino hacia la libertad.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre quien eres y quien quieres ser.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de controlar tus impulsos y enfocarte en lo que realmente importa.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la capacidad de posponer la gratificación inmediata en favor del beneficio a largo plazo.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el ingrediente secreto que convierte el talento en logros.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina es la base de todo progreso personal.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el puente entre el deseo y la realización.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de hacer lo necesario cuando no tienes ganas de hacerlo.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de vivir con propósito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus sueños en realidad.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el fundamento de todo logro duradero.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de mantener el rumbo incluso cuando las aguas están turbulentas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus intenciones en acciones.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida ordinaria y una vida extraordinaria.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el camino hacia la maestría.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es el poder de decir 'no' a las distracciones para decir 'sí' a tus metas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de vivir con intención.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de mantener el enfoque en medio del caos.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el cimiento sobre el cual se construyen los sueños.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre quien eres hoy y quien puedes ser mañana.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus debilidades en fortalezas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para desbloquear tu máximo potencial.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de hacer lo correcto incluso cuando nadie está mirando.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de mantener el rumbo cuando todos los demás abandonan.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el puente entre el potencial y la realización.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una promesa y su cumplimiento.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus sueños en planes y tus planes en acciones.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de mantener el enfoque en medio de la tormenta.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de vivir con propósito y pasión.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus fracasos en aprendizajes y tus aprendizajes en éxitos.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus excusas en resultados.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida vivida y una vida desperdiciada.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus miedos en fortalezas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la habilidad de mantener el rumbo cuando el camino se pone difícil.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus ideas en realidades.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La autodisciplina es la diferencia entre el caos y el orden.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus obstáculos en oportunidades.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus debilidades en fortalezas.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus fracasos en peldaños hacia el éxito.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida reactiva y una vida proactiva.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus sueños en hábitos y tus hábitos en realidades.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus intenciones en acciones y tus acciones en resultados.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus metas en logros.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida ordinaria y una vida extraordinaria.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus palabras en acciones.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus desafíos en victorias.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus pensamientos en realidades.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida planeada y una vida vivida.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus esfuerzos en éxitos.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus sueños en planes y tus planes en realidad.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La disciplina es el arte de convertir tus conocimientos en sabiduría.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la diferencia entre una vida intencional y una vida accidental.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "La disciplina es el arte de convertir tus fracasos en lecciones.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase:
      "La autodisciplina es la clave para convertir tus obstáculos en oportunidades.",
    autor: "Anónimo",
    libro: "Frase célebre",
  },
  {
    frase: "No subes al nivel de tus objetivos, caes al nivel de tus sistemas.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase:
      "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.",
    autor: "Aristóteles",
    libro: "Ética a Nicómaco",
  },
  {
    frase: "Hazlo tan fácil que no puedas decir que no.",
    autor: "Leo Babauta",
    libro: "El Poder de lo Simple",
  },
  {
    frase:
      "La motivación es lo que te pone en marcha. El hábito es lo que te mantiene en movimiento.",
    autor: "Jim Ryun",
    libro: "Frase célebre",
  },
  {
    frase: "Un pequeño cambio hoy puede conducir a un cambio drástico mañana.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
  {
    frase: "Si fallas en planificar, estás planeando fallar.",
    autor: "Benjamin Franklin",
    libro: "Frase célebre",
  },
  {
    frase:
      "Primero hacemos nuestros hábitos, luego nuestros hábitos nos hacen a nosotros.",
    autor: "John Dryden",
    libro: "Frase célebre",
  },
  {
    frase: "La práctica no te hace perfecto. La práctica te hace permanente.",
    autor: "Bobby Robson",
    libro: "Frase célebre",
  },
  {
    frase:
      "El éxito es el producto de los hábitos diarios, no de transformaciones radicales.",
    autor: "James Clear",
    libro: "Hábitos Atómicos",
  },
];
export default phrases;
