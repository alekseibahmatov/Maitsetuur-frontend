import React from "react-dom";
import {useState} from "react";
import './Test.css'

export const Test = () => {
    const [value, onChange] = useState([new Date(), new Date()]);

    return(

        <div>
            <table>
                <tr>
                    <td>01</td>
                    <td>02</td>
                    <td>03</td>
                    <td>04</td>
                    <td>05</td>
                    <td>06</td>
                </tr>
                <tr className='dotted'>
                    <td>07</td>
                    <td>08</td>
                    <td>09</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr className='solid'>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                </tr>
                <tr className='dotted'>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                </tr>
                <tr className='dashed'>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
            </table>
        </div>

    )
}