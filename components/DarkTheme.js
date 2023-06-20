export default function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark theme */
        :root {
          --background-color: black;
          --link-color: rgb(226, 196, 43);
          --text-color: white;
        }
      `}
    </style>
  );
}
