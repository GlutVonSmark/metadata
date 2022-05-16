import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    border-bottom: 1px solid #ddd;

    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    margin-top: 0;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    height: 38px;
`;

const NotSelectedLi = styled.li`
    float: left;
    margin-bottom: -1px;

    position: relative;
    display: block;
`;

const NotSelectedLink = styled.a`
    margin-right: 2px;
    line-height: 1.428571429;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;

    position: relative;
    display: block;
    padding: 10px 15px;

    color: #428bca;
    text-decoration: none;
`;

const ActiveLink = styled.a`
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;

    margin-right: 2px;
    line-height: 1.428571429;
    border-radius: 4px 4px 0 0;

    position: relative;
    display: block;
    padding: 10px 15px;

    text-decoration: none;
`;

const NavTabs = () => {
    return (
        <StyledUl>
            <NotSelectedLi>
                <NotSelectedLink>Search</NotSelectedLink>
            </NotSelectedLi>
            <NotSelectedLi>
                <ActiveLink>Import</ActiveLink>
            </NotSelectedLi>
            <NotSelectedLi>
                <NotSelectedLink>Delete all Entries</NotSelectedLink>
            </NotSelectedLi>
            <NotSelectedLi>
                <NotSelectedLink>Order</NotSelectedLink>
            </NotSelectedLi>
        </StyledUl>
    );
};

export default NavTabs;
