import { useEffect, useState } from "react";
import Skill from "./Skill";
import {
    bootstrapLogo,
    cssLogo,
    githubLogo,
    htmlLogo,
    javascriptLogo,
    materialuiLogo,
    nextjsLogo,
    reactLogo,
    reduxLogo,
    sassLogo,
    tailwindLogo,
    nodeJsLogo,
    mysqlLogo,
    mongoDBLogo,
    typescriptLogo,
    expressJsLogo
    
  } from "../../assets/icons";
const Skills = () => {
    const [css, setCss] = useState(0);
    const [html, setHtml] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [nextjs, setNextjs] = useState(0);
    const [sass, setSass] = useState(0);
    const [tailwind, setTailwind] = useState(0);
    const [react, setReact] = useState(0);
    const [redux, setRedux] = useState(0);
    const [github, setGithub] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [materialui, setMaterialui] = useState(0);
    const [nodejs, setNodejs] = useState(0);
    const [mysql, setMysql] = useState(0);
    const [mongodb, setMongodb] = useState(0);
    const [typescript, setTypescript] = useState(0);
    const [express, setExpress] = useState(0);
    
  useEffect(() => {
    const timer = setInterval(() => {
      setCss((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setHtml((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setJavascript((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setNextjs((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setSass((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setTailwind((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
     
      setReact((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setRedux((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setBootstrap((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setMaterialui((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setGithub((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setNodejs((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setMysql((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setMongodb((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setExpress((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      setTypescript((oldState) => {
        const random = Math.random() * 10;
        return Math.min(oldState + random, 100);
      });
      return () => {
        clearInterval(timer);
      };
    }, 200);
  }, []);
  return (
    <>
      <Skill color="orangeCustom" value={html} label="Html" icon={htmlLogo} />
      <Skill
        color="whiteCustom"
        value={bootstrap}
        label="Bootstrap"
        icon={bootstrapLogo}
      />
      <Skill color="blackCustom" value={github} label="Github" icon={githubLogo} />
      <Skill color="info" value={css} label="Css" icon={cssLogo} />
      <Skill
        color="yellowCustom"
        value={javascript}
        label="Javascript"
        icon={javascriptLogo}
      />
      <Skill
        color="muiCustom"
        value={materialui}
        label="Material Ui"
        icon={materialuiLogo}
      />
      <Skill color="nextjsCustom" value={nextjs} label="Next Js" icon={nextjsLogo} />
      <Skill color="reactCustom" value={react} label="React" icon={reactLogo} />
      <Skill color="reduxCustom" value={redux} label="Redux" icon={reduxLogo} />
      <Skill color="sassCustom" value={sass} label="Sass" icon={sassLogo} />
      <Skill
        color="tailwindCustom"
        value={tailwind}
        label="Tailwind"
        icon={tailwindLogo}
      />
      <Skill
        color="nodejsCustom"
        value={nodejs}
        label="NodeJs"
        icon={nodeJsLogo}
      />
      <Skill
        color="expressjsCustom"
        value={express}
        label="ExpressJs"
        icon={expressJsLogo}
      />
      <Skill
        color="mysqlCustom"
        value={mysql}
        label="Mysql"
        icon={mysqlLogo}
      />
      <Skill
        color="nodejsCustom"
        value={mongodb}
        label="MongoDB"
        icon={mongoDBLogo}
      />
      <Skill
        color="reactCustom"
        value={typescript}
        label="Typescript"
        icon={typescriptLogo}
      />
    </>
  );
};
export default Skills;
