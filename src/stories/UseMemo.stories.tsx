import React, {useCallback, useMemo, useState} from 'react';
import {Select} from "../components/Select/Select";
import '../App.css';


export default {
    title: 'useMemo',
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;

    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>


}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('User')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret);

export const HelpsForReactMemoExample = () => {
    console.log('HelpsForReactMemoExample')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Bimych', 'Dymuch', 'Artem', 'Petr']);

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const SelectExample = () => {
    const [value, setValue] = useState(null)
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)

    const town = [
        {countryId: 'Belarus', value: '1', title: 'Minsk', population: 2000},
        {countryId: 'Belarus', value: '2', title: 'Borovlyni', population: 80},
        {countryId: 'Belarus', value: '3', title: 'Valevachi', population: 50},
        {countryId: 'Ukraina', value: '4', title: 'Kiev', population: 3000},
        {countryId: 'Ukraina', value: '5', title: 'Bycha', population: 100},
        {countryId: 'Ukraina', value: '6', title: 'Donetck', population: 150},
        {countryId: 'Israel', value: '7', title: 'MayBeBobryisk', population: 300},
        {countryId: 'Israel', value: '8', title: 'Haifa', population: 200},
        {countryId: 'Israel', value: '9', title: 'Ierusalim', population: 1000},
    ];


    const belTown = useMemo(() => {
        console.log('v')
        let item = town.filter(el => el.countryId === 'Belarus');
        return item.map(el => ({
            value: el.value, title: el.title
        }))
    }, [value]);

    const popTown = useMemo(() => {
        console.log('v1')
        let item = town.filter(el => el.population > 200);
        return item.map(el => ({
            value: el.value, title: el.title
        }))
    }, [value1]);

    const mTown = useMemo(() => {
        console.log('v2')
        let item = town.filter(el => el.title.indexOf('M') > -1);
        return item.map(el => ({
            value: el.value, title: el.title
        }))
    }, [value2]);

    const [counter, setCounter] = useState(0);

    return <div className={'selectMemo'} >
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}</div>
        <div>Belarus
            <Select onChange={setValue}
                    value={value}
                    items={belTown}/></div>
        <div>population 150+
            <Select onChange={setValue1}
                    value={value1}
                    items={popTown}/></div>
        <div>Start M
            <Select onChange={setValue2}
                    value={value2}
                    items={mTown}/></div>
    </div>
};

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'HTML', 'CSS', 'MEMO']);

    const newArray = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('a') > -1);
    }, [books])



    const memoizedAddBook = useMemo(()=>{
        return ()=>{
            const newBook = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBook)
        }
    },[books]);

    const memoizedAddBook2 = useCallback(()=>{

            const newBook = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBook)

    },[books]);



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}


const BooksSecret = (props: { books: Array<string>;addBook:()=>void}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
        props.books.map((book, i) => <div key={i}>{book}</div>)
    }</div>
}
const Book = React.memo(BooksSecret);


