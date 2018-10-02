import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    const Bar = styled.div`
        .container {
            position: fixed;
            width: 15vw;
            top: 4vh;
            right: 5px;
            span {
                display: flex;
                flex-direction: row;
                margin-right: 5px;
                .fa-search {
                    color: white;
                    font-size: 3vw;
                }
                input {
                    background-color: black;
                    color: white;
                    border: none;
                    width: 11vw;
                    margin-left: 5px;
                    font-size: 20px;
                    line-height: 2;
                }
            }
        }
    `
    return (
        <Bar>
            <div className="container">
                <span>
                    <i className="far fa-search"></i>
                    <form>
                        <input 
                            placeholder="SEARCH"/>
                    </form>
                </span>
                
            </div>
        </Bar>
    );
}

export default SearchBar;