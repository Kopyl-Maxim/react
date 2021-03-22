import React from "react";
import firebase from '../Base'

export const UsersInput = ({toggle, spell}) => {
    const [name, setName] = React.useState(spell.name);
    const [date, setDate] = React.useState(spell.date);
    const [lastname, setLastName] = React.useState(spell.lastname);
    let login = spell.login
    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('Users').doc(spell.id).set({...spell, name, lastname, date, login})
        toggle()
    }
    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('Users').doc(spell.id).delete()
        toggle()
    }
    return (
        <div>
            <form>
                <label>
                    <h1>{login}</h1>
                    Name
                    <input value={name} onChange={e => {
                        setName(e.target.value);
                    }}/>
                </label>
                <label>
                    lastname
                    <input value={lastname} onChange={e => {
                        setLastName(e.target.value);
                    }}/>
                </label>
                <label>
                    date
                    <input value={date} onChange={e => {
                        setDate(e.target.value);
                    }}/>

                </label>
                <div className="dl-ap">
                    <button className="but" onClick={onDelete}>Delete</button>
                    <button className="but" onClick={onUpdate}>Update</button>
                </div>
            </form>
        </div>
    );
};
