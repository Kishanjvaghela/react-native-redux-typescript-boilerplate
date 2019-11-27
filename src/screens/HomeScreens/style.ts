import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navBarItem: {
        flex: 1,
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgb(252,252,252)',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50
    },
    userItem: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: 'white',
        marginVertical: 2,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        borderRadius: 4,
    },
    userDetail: {
        justifyContent: 'center',
        marginLeft: 14
    },
    userList: {
        backgroundColor: 'rgb(252,252,252)',
    }
});
