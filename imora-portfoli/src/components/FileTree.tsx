import { File, Folder, Tree } from "@/components/ui/file-tree";

export function FileTreeDemo() {
  return (
    <div className="relative flex h-full w-full  flex-col items-center justify-center overflow-hidden rounded-lg   ">
      <Tree
        className=" overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={["1", "2", "3", "4", "5"]}
        elements={ELEMENTS}
      >
        <Folder element="core" value="1">
          <File value="2">
            <p>Familia</p>
          </File>
          <File value="3">
            <p>Amigos</p>
          </File>
        </Folder>
        <Folder element="salud" value="4">
          <File value="5">
            <p>Ejercicio</p>
          </File>
          <File value="6">
            <p>Alimentación</p>
          </File>
          <File value="7">
            <p>Bienestar</p>
          </File>
        </Folder>
        <Folder element="trabajo" value="8">
          <File value="9">
            <p>Proyectos</p>
          </File>
          <File value="10">
            <p>Aprendizaje</p>
          </File>
          <File value="11">
            <p>Networking</p>
          </File>
        </Folder>
        <Folder element="pasatiempos" value="12">
          <File value="13">
            <p>Lectura</p>
          </File>
          <File value="14">
            <p>Música</p>
          </File>
          <File value="15">
            <p>Arte</p>
          </File>
        </Folder>
        <Folder element="crecimiento-personal" value="16">
          <File value="17">
            <p>Desarrollo Personal</p>
          </File>
          <File value="18">
            <p>Habilidades Nuevas</p>
          </File>
          <File value="19">
            <p>Meditación</p>
          </File>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Core",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "Familia",
      },
      {
        id: "3",
        isSelectable: true,
        name: "Amigos",
      },
    ],
  },
  {
    id: "4",
    isSelectable: true,
    name: "Salud",
    children: [
      {
        id: "5",
        isSelectable: true,
        name: "Ejercicio",
      },
      {
        id: "6",
        isSelectable: true,
        name: "Alimentación",
      },
      {
        id: "7",
        isSelectable: true,
        name: "Bienestar",
      },
    ],
  },
  {
    id: "8",
    isSelectable: true,
    name: "Trabajo",
    children: [
      {
        id: "9",
        isSelectable: true,
        name: "Proyectos",
      },
      {
        id: "10",
        isSelectable: true,
        name: "Aprendizaje",
      },
      {
        id: "11",
        isSelectable: true,
        name: "Networking",
      },
    ],
  },
  {
    id: "12",
    isSelectable: true,
    name: "Pasatiempos",
    children: [
      {
        id: "13",
        isSelectable: true,
        name: "Lectura",
      },
      {
        id: "14",
        isSelectable: true,
        name: "Música",
      },
      {
        id: "15",
        isSelectable: true,
        name: "Arte",
      },
    ],
  },
  {
    id: "16",
    isSelectable: true,
    name: "Crecimiento Personal",
    children: [
      {
        id: "17",
        isSelectable: true,
        name: "Desarrollo Personal",
      },
      {
        id: "18",
        isSelectable: true,
        name: "Habilidades Nuevas",
      },
      {
        id: "19",
        isSelectable: true,
        name: "Meditación",
      },
    ],
  },
];
