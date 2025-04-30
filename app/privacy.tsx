import { ScrollView, Text, TextProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Paragraph({ className, children, ...props }: TextProps) {
  return (
    <Text
      className="text-primary font-secondary-regular text-sm px-4 self-center text-justify "
      children={"\t\t" + children + "\n"}
      {...props}
    ></Text>
  );
}
export default function Privacy() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="bg-center p-2 font-secondary-bold text-2xl text-center text-textPrimary">
          Política de privacidad
        </Text>
        <Paragraph>
          Esta política de privacidad describe cómo se recopila, utiliza y
          protege su información personal cuando utiliza nuestra aplicación de
          administración de hábitos Abitudine. Se recopila información personal
          que usted nos proporciona directamente. Esto incluye su apodo, que se
          utiliza para personalizar su experiencia dentro de la aplicación e
          identificarlo en la misma. También se recopila su dirección de correo
          electrónico, que se utiliza para la gestión de cuentas y
          comunicaciones relacionadas con la aplicación. Además, se solicita su
          fecha de nacimiento para verificar su edad y cumplir con las leyes de
          protección de datos aplicables. En el futuro, esta información podría
          utilizarse para ofrecer funcionalidades específicas o para realizar
          análisis demográficos agregados y anónimos, así como para enviarle
          notificaciones relacionadas con la aplicación.
        </Paragraph>
        <Paragraph>
          Se utiliza su información personal para los siguientes fines: su apodo
          se utiliza para personalizar su experiencia dentro de la aplicación;
          su dirección de correo electrónico se utiliza para la gestión de
          cuentas y comunicaciones relacionadas con la aplicación; y su fecha de
          nacimiento se utiliza para verificar su edad y cumplir con las leyes
          de protección de datos aplicables. Nos comprometemos a no compartir su
          información personal con terceros.
        </Paragraph>
        <Paragraph>
          Se implementan medidas de seguridad razonables para proteger su
          información personal contra acceso no autorizado, alteración,
          divulgación o destrucción. Se conservará su información personal
          durante el tiempo que sea necesario para cumplir con los fines
          descritos en esta política de privacidad, a menos que la ley exija o
          permita un período de retención más largo.
        </Paragraph>
        <Paragraph>
          Usted tiene los siguientes derechos con respecto a su información
          personal: derecho a acceder a su información personal, derecho a
          rectificar información personal inexacta o incompleta, derecho a
          solicitar la eliminación de su información personal cuando
          corresponda, y derecho a oponerse al procesamiento de su información
          personal cuando corresponda.
        </Paragraph>
      </ScrollView>
    </SafeAreaView>
  );
}
