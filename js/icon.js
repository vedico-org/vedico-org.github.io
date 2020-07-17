const icons = [];

class Data {
  constructor(name,colored,extra_fonts,extra_svg){
    this.name = name;
    this.colored = colored;
    this.extra_fonts = extra_fonts;
    this.extra_svg = extra_svg;
  }
}

class Icon {
   constructor(name,svg,font){
      this.name = name;
      this.svg = svg;
      this.font = font;

   }
}

const data = [
  new Data("android",true,[],[]),
  new Data("angularjs",true,[],[]),
  new Data("apache",true,[],[]),
  new Data("apple",false,[],[]),
  new Data("atom",true,[],[]),
  new Data("aws",true,[],[]),
  new Data("bootstrap",true,[],[]),
  new Data("bulma",true,[],[]),
  new Data("c",true,[],[]),
  new Data("codeigniter",true,[],[]),
  new Data("cpp",true,[],[]),
  new Data("csharp",true,[],[]),
  new Data("css",true,[],[]),
  new Data("debian",true,[],[]),
  new Data("django",true,[],[]),
  new Data("docker",true,[],[]),
  new Data("dotnet",true,[],[]),
  new Data("drupal",true,[],[]),
  new Data("electronjs",true,[],[]),
  new Data("emberjs",true,[],[]),
  new Data("express",true,[],[]),
  new Data("facebook",true,[],[]),
  new Data("figma",true,[],[]),
  new Data("firebase",true,[],[]),
  new Data("flutter",true,[],[]),
  new Data("gatsbyjs",true,[],[]),
  new Data("git",true,[],[]),
  new Data("github",true,[],[]),
  new Data("gitlab",true,[],[]),
  new Data("googlecloud",true,[],[]),
  new Data("graphql",true,[],[]),
  new Data("gulp",true,[],[]),
  new Data("heroku",true,[],[]),
  new Data("html",true,[],[]),
  new Data("java",true,[],[]),
  new Data("javascript",true,[],[]),
  new Data("jquery",true,[],[]),
  new Data("kubernetes",true,[],[]),
  new Data("laravel",true,[],[]),
  new Data("less",true,[],[]),
  new Data("magento",true,[],[]),
  new Data("mongodb",true,[],[]),
  new Data("mysql",true,[],[]),
  new Data("nginx",true,[],[]),
  new Data("nodejs",true,[],[]),
  new Data("npm",true,[],[]),
  new Data("php",true,[],[]),
  new Data("postgresql",true,[],[]),
  new Data("postman",true,[],[]),
  new Data("python",true,[],[]),
  new Data("rails",true,[],[]),
  new Data("react",true,[],[]),
  new Data("ruby",true,[],[]),
  new Data("sass",true,[],[]),
  new Data("slack",true,[],[]),
  new Data("swift",true,[],[]),
  new Data("symfony",true,[],[]),
  new Data("tensorflow",true,[],[]),
  new Data("twitter",true,[],[]),
  new Data("typescript",true,[],[]),
  new Data("visualstudio",true,[],[]),
  new Data("vuejs",true,[],[]),
  new Data("wordpress",true,[],[]),
  new Data("adobexd",true,[],[]),
  new Data("arduino",true,[],[]),
  new Data("behance",true,[],[]),
  new Data("bitbucket",true,[],[]),
  new Data("cloudflare",true,[],[]),
  new Data("codepen",false,[],[]),
  new Data("digitalocean",true,[],[]),
  new Data("gitter",true,[],[]),
  new Data("go",true,[],[]),
  new Data("google",true,[],[]),
  new Data("adobeillustrator",true,[],[]),
  new Data("instagram",true,[],[]),
  new Data("joomla",true,[],[]),
  new Data("jsdelivr",true,[],[]),
  new Data("jsfiddle",true,[],[]),
  new Data("kaggle",true,[],[]),
  new Data("kotlin",true,[],[]),
  new Data("letsencrypt",true,[],[]),
  new Data("adobelightroom",true,[],[]),
  new Data("linkedin",true,[],[]),
  new Data("medium",true,[],[]),
  new Data("messenger",true,[],[]),
  new Data("microsoft",true,[],[]),
  new Data("netlify",true,[],[]),
  new Data("patreon",true,[],["colored-2"]),
  new Data("adobephotoshop",true,[],[]),
  new Data("raspberrypi",true,[],[]),
  new Data("reddit",false,["2"],["2"]),
  new Data("soundcloud",false,[],[]),
  new Data("sourceforge",true,[],[]),
  new Data("spotify",true,[],[]),
  new Data("stackoverflow",true,[],[]),
  new Data("telegram",false,[],["og"]),
  new Data("vscode",true,[],[]),
  new Data("whatsapp",true,[],[]),
  new Data("youtube",true,[],[]),
  new Data("adobeaftereffects",true,[],[]),
  new Data("adobedreamweaver",true,[],[]),
  new Data("adobeindesign",true,[],[]),
  new Data("adobepremierepro",true,[],[]),
  new Data("archlinux",true,[],[]),
  new Data("azuredevops",true,[],[]),
  new Data("azurepipelines",true,[],[]),
  new Data("babel",true,[],[]),
  new Data("buymeacoffee",true,[],[]),
  new Data("circleci",true,[],[]),
  new Data("coffeescript",true,[],[]),
  new Data("creativecommons",false,[],[]),
  new Data("fedora",true,[],[]),
  new Data("fitbit",true,[],[]),
  new Data("googleallo",true,[],[]),
  new Data("json",false,[],[]),
  new Data("kickstarter",true,[],[]),
  new Data("linux",false,[],[]),
  new Data("linuxmint",true,[],[]),
  new Data("materialdesign",true,[],[]),
  new Data("microsoftaccess",true,[],[]),
  new Data("microsoftazure",true,[],[]),
  new Data("microsoftexcel",true,[],[]),
  new Data("microsoftonedrive",true,[],[]),
  new Data("microsoftonenote",true,[],[]),
  new Data("microsoftoutlook",true,[],[]),
  new Data("microsoftpowerpoint",true,[],[]),
  new Data("microsoftword",true,[],[]),
  new Data("opensuse",true,[],[]),
  new Data("powershell",true,[],[]),
  new Data("scala",true,[],[]),
  new Data("ubuntu",true,[],[]),
  new Data("unity",false,[],[]),
  new Data("unrealengine",true,[],[]),
];

data.forEach((obj) => {
  let svg = [obj.name];
  let font = [obj.name];
  if(obj.colored) svg.push(obj.name + "-colored");
  
  obj.extra_svg.forEach((extra) => {
    svg.push(obj.name + "-" + extra);
  });
  obj.extra_fonts.forEach((extra) => {
    font.push(obj.name + "-" + extra);
  });

  icons.push(new Icon(obj.name,svg,font));
});

function compare(a, b) {
  const iconA = a.name.toUpperCase();
  const iconB = b.name.toUpperCase();

  let comparison = 0;
  if (iconA > iconB) {
    comparison = 1;
} else if (iconA < iconB) {
    comparison = -1;
  }
  return comparison;
}

icons.sort(compare);
