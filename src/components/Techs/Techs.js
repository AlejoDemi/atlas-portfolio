import React from 'react';
//import angular from "../../assets/techs/angular-icon-1.svg";
import aws1 from "../../assets/techs/aws-2.svg";
import aws2 from "../../assets/techs/aws-dynamodb.svg";
import django from "../../assets/techs/django.svg";
//import github from "../../assets/techs/github-logo.svg";
import graphql from "../../assets/techs/graphql.svg";
//import intellij from "../../assets/techs/intellij-idea-1.svg";
import java from "../../assets/techs/java-4.svg";
//import kotlin from "../../assets/techs/kotlin-1.svg";
import prisma from "../../assets/techs/prisma-3.svg"
import git from "../../assets/techs/git-icon.svg"
import css from "../../assets/techs/css-3.svg";
import html from "../../assets/techs/html-1.svg";
import javascript from "../../assets/techs/javascript-1.svg"
import postgresql from "../../assets/techs/postgresql.svg"
import jquery from "../../assets/techs/jquery-4.svg";
import sass from "../../assets/techs/sass-1.svg";
//import docker1 from "../../assets/techs/docker-3.svg"
import docker2 from "../../assets/techs/docker.svg"
//import mongo from "../../assets/techs/mongodb-icon-1.svg";
import mysql from "../../assets/techs/mysql-6.svg";
import nodejs from "../../assets/techs/nodejs-icon.svg";
import python from "../../assets/techs/python-5.svg";
import react from "../../assets/techs/react-2.svg";
import redux from "../../assets/techs/redux.svg";
//import spark from "../../assets/techs/spark-2.svg";
import typescript from "../../assets/techs/typescript.svg";
//import vue from "../../assets/techs/vue-js-1.svg";
//import webstorm from "../../assets/techs/webstorm-icon.svg";
import "./Techs.css";

const MyComponent = () => {
    const techList=[
        aws1,
        aws2,
        django,
        git,
        graphql,
        java,
        prisma,
        css,
        html,
        javascript,
        postgresql,
        jquery,
        docker2,
        mysql,
        nodejs,
        python,
        react,
        redux,
        sass,
        typescript,
    ]


    const list=techList.map((techLogo,index)=>
        <img style={{height:"70px",width:"70px"}} key={index} src={techLogo} alt={techLogo}></img>
    )

    return (
        <div className={"techsContainer"}>
            <h1 className={"techsTitle"}>OUR TECHS</h1>
            <div className={"techList"}>
                {list}
            </div>
        </div>

    );
};

export default MyComponent;
