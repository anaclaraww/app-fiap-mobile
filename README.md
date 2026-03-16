# FIAP Helpers!!

##  Descrição do Projeto

O **FIAP Helpers** é um aplicativo desenvolvido em **React Native** com o objetivo de permitir que estudantes compartilhem conhecimentos e se ajudem em diferentes disciplinas e tecnologias.

A ideia principal do projeto é criar uma **plataforma colaborativa**, onde alunos possam:

- Fazer perguntas sobre conteúdos estudados
- Ajudar outros alunos com respostas e explicações
- Compartilhar experiências e materiais de estudo

Assim, o aplicativo promove **aprendizado colaborativo**, incentivando a troca de conhecimento entre estudantes.

---

# Projeto com:

- React Native
- Expo
- NativeWind
- TailwindCSS
- Expo Vector Icons

### Documentações utilizadas

- https://reactnative.dev/docs/components-and-apis
- https://www.nativewind.dev/docs/getting-started/installation
- https://tailwindcss.com/docs/theme
- https://icons.expo.fyi/Index

---

#  Integrantes

| Nome | RM |
|-----|-----|
| Ana Clara de Melo 1 | RM559021 |
| Lucas Serrano 2 | RM555170|
| David Murillo 3 | RM559078 |
| Yasmin Gonçalves 4 | RM559147 |

---

# Funcionalidades da Tela de Login

A tela de login permite que o usuário acesse o aplicativo informando suas credenciais.

### Campos da tela

- Email
- Senha
- Switch para lembrar usuário
- Botão de login

Também contém:

- Logo do aplicativo
- Título da aplicação
- Interface simples e intuitiva

---

# Estilização

A estilização foi feita utilizando:

- **NativeWind**
- **TailwindCSS**

Isso permite uma estilização mais rápida, organizada e reutilizável.
estilos aplicados:
- Centralização de elementos
- Espaçamentos
- Bordas arredondadas
- Cores personalizadas
- Layout responsivo
---

# Requisitos do Projeto

O projeto segue os requisitos definidos na atividade:

- Desenvolvimento da tela de Login  
- Utilização de componentes base do React Native  
- Criação de componente personalizado  
- Uso de biblioteca de ícones  
- Estilização com NativeWind ou StyleSheet  
- Organização do projeto conforme padrão apresentado em aula  




# LoginScreen

Componente **React Native** design da tela de login com UI responsiva.

## Características 

- **Componentes nativos:** `View`, `Text`, `TextInput`, `TouchableOpacity`, `Switch`, `Image`.
- **React Hooks:** usa `useState` para controlar o estado do switch.
- **Entrada de dados:** validação básica via `textContentType` e `keyboardType` para email; `secureTextEntry` para senha.
- **Layout e estilo:** combina **StyleSheet** e classes utilitárias Tailwind (`bg-gray-950`, `rounded-2xl`, `shadow-md`).
- **Responsividade:** usa flexbox para centralização e alinhamento, compatível com diferentes tamanhos de tela.


---


O **FIAP Helpers** busca facilitar a colaboração entre estudantes, criando um ambiente onde o conhecimento pode ser compartilhado de forma simples e rápida.

A implementação da **tela de login** representa o primeiro passo para a construção do aplicativo, aplicando conceitos fundamentais de **React Native, componentização e estilização moderna**.