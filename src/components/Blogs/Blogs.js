import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-3">
      <section>
        <h2>01. Difference between javascript and nodejs.</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr className="text-center">
              <th>Basic Comparision</th>
              <th>JavaScript</th>
              <th>Node Js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>
                JavaScript is a programming language. It is running in any web
                browser with a proper browser engine.
              </td>
              <td>
                It is an interpreter and environment for JavaScript with some
                specific useful libraries which JavaScript programming can use
                separately.
              </td>
            </tr>
            <tr>
              <td>Utility</td>
              <td>
                Mainly using for any client-side activity for a web application,
                like possible attribute validation or refreshing the page in a
                specific interval or provide some dynamic changes in web pages
                without refreshing the page.
              </td>
              <td>
                It mainly used for accessing or performing any non-blocking
                operation of any operating system, like creating or executing a
                shell script or accessing any hardware-specific information or
                running any backend job.
              </td>
            </tr>
            <tr>
              <td>Running Engine</td>
              <td>
                JavaScript running any engine like Spider monkey (FireFox),
                JavaScript Core (Safari), V8 (Google Chrome).
              </td>
              <td>
                Node JS only run in a V8 engine which mainly used by google
                chrome. And javascript program which will be written under this
                Node JS will be always run in V8 Engine.
              </td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="mt-5">
        <h2>02. When should you use nodejs and when should you use mongodb.</h2>
        <h4>Use of Node Js</h4>
        <ul>
          <li>
            <strong>Backend for social media networking</strong> <br />
            <p>
              Many renowned names such as LinkedIn and Medium are rebuilt on
              Node.js. An essential combination of nodes is needed to build a
              backend for a social media networking site. Node.js provides
              blazing-fast routing with its V8 engine along with secure
              authentication. Scalability is one of the most significant factors
              which enriches a social media network.
            </p>
          </li>
          <li>
            <strong>Single-page application</strong> <br />
            <p>
              Like single-page websites, Node.js can build a single-page app,
              where the look and feel are similar to a desktop application. Due
              to its versatile options, Node.js is a good fit for building
              social networking platforms, dynamic websites, and mailing
              solutions. What’s more, the asynchronous data flow quality on the
              backend in Node.js makes it the best bet for SPA development.
            </p>
          </li>
          <li>
            <strong>Chat application</strong> <br />{" "}
            <p>
              Node.js offers exclusive advanced functionalities for real-time
              chatbots and chat applications. The key features such as
              multi-user applications, intensive data, heavy traffic across all
              devices are very popular in chatbots. Node.js hits the sweet spot,
              for it runs across different devices and covers all paradigms in
              chat and chatbot apps. In addition, Node.js makes it easy to
              execute push notifications and server-side event loops popular in
              IMs and real-time apps.
            </p>
          </li>
        </ul>
        <h4>Use of MongoDB</h4>
        <p>
          MongoDB facilitate to store database in json(javascript object
          notation) (or simply when data in form of key value pair) this is very
          fast and efficient so you should use it when you have key value pair
          to store(json data) one of the best advantage with MongoDB is you can
          store a collection inside another collection (in relational database
          is can be said as table inside another table) this neglect use of
          “join” You can also store a array inside a field (neglect use of
          foreign key of relational model) in this you can use concepts like
          mongo population to join data of multipal fields if require and most
          importantly it support More user at a time and also useful if you have
          large number of fields ( large number of coloums in your collection or
          table)
        </p>
      </section>

      <section className="mt-5">
        <h2>03. Differences between sql and nosql databases.</h2>

        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Sl No</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have dynamic schema</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>These databases are not suited for hierarchical data storage.</td>
              <td>These databases are best suited for hierarchical data storage.</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Blogs;
