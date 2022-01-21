import firebase from "../database/firebase";

export const verificaCampos = async (state) => {

};

export const acessaPerfil = ({navigation}) => {
    navigation.navigate('Perfil');
};

export const handleSignUp = async (state) => {
    //caso seja, realizar a criação do usuário no bd e na autenticação 
    if (state.name == '' || state.email == '' || state.phone == '' || state.pass === '') {
        await alert("Todos os campos são obrigatórios");
    } else {
        firebase.auth
            .createUserWithEmailAndPassword(state.email, state.pass)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Usuário '", user.email + "' registrado");
            })
            .catch(error => alert(error.message));

        await firebase.db.collection('users').add({
            name: state.name,
            email: state.email,
            phone: state.phone,
            pass: state.pass
        });
        alert("Usuário registrado com sucesso!");
    }
};

export const handleLogin = (email, pass) => {
    firebase.auth
        .signInWithEmailAndPassword(email, pass)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logado como:', user.email);
        })
        .catch(error => alert("Faça seu cadastro, safad@"))
};

export const handleSignOut = async (props) => {
    firebase.auth
        .signOut()
        .then(() => {
            props.navigation.navigate('Login');
        })
        .catch(error => alert(error.message))
};