import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "awslambda",
  "amazonaws",
  "nginx",
  "vercel",
  "git",
  "github",
  "springboot",
  "spring",
  "springsecurity",
  "angular",
  "visualstudiocode",
  "mongodb",
  "mognodbatlas",
  "tailwindcss",
  "linux",
  "serverless",
  "mysql",
  "python",
  "apache",
  "nextdotjs",
  "nextui"
]

export function IconCloudDemo() {
  return (
    <div className="h-full z-20">
      <IconCloud iconSlugs={slugs}  />
    </div>
  );
}
