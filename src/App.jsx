import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { createExamples } from '@mathExamples/math-examples1.js'

function App() {
  const examples = createExamples()
  return (
    <MathJaxContext>
      <div className="appContainer">
        <h1>Рос математика</h1>
        <TableContainer >
          <Table>
            <TableBody>
              {
                examples.map((example, index) => (
                  <>
                  <TableRow>
                    <TableCell>{index+1}.</TableCell>
                    <TableCell>{example.math}</TableCell>
                    <TableCell>при {example.condition}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell colSpan={2}>Ответ {example.answer}</TableCell>
                  </TableRow>
                  </>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </MathJaxContext>
  );
}

export default App;
