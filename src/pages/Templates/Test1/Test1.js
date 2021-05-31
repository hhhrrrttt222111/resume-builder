import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';



import openSans from '../../../assets/fonts/OpenSans-Light.ttf'
import Alegreya from '../../../assets/fonts/AlegreyaSansSC-Bold.ttf'
import ubuntu from '../../../assets/fonts/UbuntuMono-Italic.ttf'
import nunito from '../../../assets/fonts/Nunito-Light.ttf'
import Courgette from '../../../assets/fonts/Courgette-Regular.ttf'

// Create styles
Font.register({ family: "'Open Sans', sans-serif", src: openSans });
Font.register({ family: "'Alegreya Sans SC', sans-serif", src: Alegreya });
Font.register({ family: "font-family: 'Ubuntu Mono', monospace", src: ubuntu });
Font.register({ family: "'Nunito', sans-serif", src: nunito });
Font.register({ family: "'Courgette', cursive", src: Courgette });


function Test1({ resume }) {

    // console.log(resume)
    
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#ccffff',
        },
        header: {
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#66ffff',
        },
        avatar : {
            width: '90px',
            height: '90px',
            borderRadius: '100%',
            marginRight: 25
        },
        headerRight: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            overflow: 'hidden',
        },
        name: {
            fontSize: 35,
            fontFamily: "'Courgette', cursive",
        },
        title: {
            fontSize: 16,
            textTransform: 'uppercase',
            marginTop: '-10px',
            fontFamily: "'Nunito', sans-serif"
        },
        bio: {
            margin: 20,
            marginBottom: 0,
            marginTop: 15
        },
        bioText: {
            margin: 20,
            fontSize: 14,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '900'
        },
        educationContainer: {
            marginLeft: 70,
            marginRight: 40,
            marginBottom: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        eduHeading: {
            marginBottom: 5,
            marginTop: 15,
            fontSize: 15,
            textTransform: 'uppercase',
            marginLeft: '-190px',
            fontFamily: "'Alegreya Sans SC', sans-serif"
        },
        education: {
            marginTop: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        },
        eduYear: {
            marginRight: 40,
            fontSize: 10,
            fontFamily: "font-family: 'Ubuntu Mono', monospace"
        },
        eduRight: {
            marginLeft: 20,
        },
        eduRightTitle: {
            fontSize: '13px',
            fontFamily: "'Nunito', sans-serif"
        }, 
        eduRightCont: {
            fontSize: '10px',
            fontFamily: "'Nunito', sans-serif"
        },
        skillInterest: {
            marginLeft: 30,
            marginRight: 30,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly'
        },
        skillInterestHeading: {
            marginBottom: 10,
            marginTop: 15,
            fontSize: 15,
            textTransform: 'uppercase',
            fontFamily: "'Alegreya Sans SC', sans-serif"
        },
        skill: {
            fontSize: '10px',
            marginBottom: '5px',
            fontFamily: "'Nunito', sans-serif"
        },
        contact: {
            padding: 40,
            paddingBottom: 3,
            paddingTop: 25,
            display: 'flex',
            flexDirection: 'row',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
        },
        address: {
            margin: 10,
            marginLeft: 100,
            paddingRight: 20,
            width: '70%'
        },
        contactItem: {
            fontSize: '10px',
            marginBottom: '4px',
            fontFamily: "'Nunito', sans-serif"
        }
    });


    return (
        <Document>
            <Page size="A4" style={styles.page} title="resume">
                <View style={styles.header}>
                    <Image src="https://avatars.githubusercontent.com/u/43471295?v=4" style={styles.avatar}/>
                    <View style={styles.headerRight}>
                        <Text style={styles.name}>John Wick</Text>
                        <Text style={styles.title}>Frontend Developer</Text>
                    </View>
                </View>
            
                <View style={styles.bio}>
                    <Text style={styles.bioText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </Text>
                </View>
                
                <View style={styles.educationContainer}>
                    <Text style={styles.eduHeading}>Education</Text>

                    <View style={styles.education}>
                        <Text style={styles.eduYear}>2007 - 2019</Text>
                        <View style={styles.eduRight}>
                            <Text style={styles.eduRightTitle}>Hogwarts School of Witchcraft and Wizardry</Text>
                            <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                        </View>
                    </View>
                    <View style={styles.education}>
                        <Text style={styles.eduYear}>2007 - 2019</Text>
                        <View style={styles.eduRight}>
                            <Text style={styles.eduRightTitle}>Hogwarts School of Witchcraft and Wizardry</Text>
                            <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                        </View>
                    </View>
                    <View style={styles.education}>
                        <Text style={styles.eduYear}>2007 - 2019</Text>
                        <View style={styles.eduRight}>
                            <Text style={styles.eduRightTitle}>Hogwarts School of Witchcraft and Wizardry</Text>
                            <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.educationContainer}>
                    <Text style={styles.eduHeading}>Experience</Text>

                    <View style={styles.education}>
                        <Text style={styles.eduYear}>2007 - 2019</Text>
                        <View style={styles.eduRight}>
                            <Text style={styles.eduRightTitle}>Google</Text>
                            <Text style={styles.eduRightCont}>Front end developer</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.skillInterest}>
                    <View style={styles.skillsCont}>
                        <Text style={styles.skillInterestHeading}>Skills</Text>
                        <View>
                            <Text style={styles.skill}>HTML/CSS/JS</Text>
                            <Text style={styles.skill}>React JS</Text>
                            <Text style={styles.skill}>Django</Text>
                            <Text style={styles.skill}>MERN Stack</Text>
                            <Text style={styles.skill}>Photoshop</Text>
                            <Text style={styles.skill}>Java</Text>
                            <Text style={styles.skill}>Python</Text>
                        </View>
                    </View>
                    <View style={styles.interestsCont}>
                        <Text style={styles.skillInterestHeading}>Interests</Text>
                        <View>
                            <Text style={styles.skill}>Reading</Text>
                            <Text style={styles.skill}>Singing</Text>
                            <Text style={styles.skill}>Blogging</Text>
                            <Text style={styles.skill}>Movies</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contact}>
                    <View style={styles.details}>
                        <Text style={styles.contactItem}>1234567890</Text>
                        <Text style={styles.contactItem}>test.human@gmail.com</Text>
                        <Text style={styles.contactItem}>https://thisismywebsite.com</Text>
                    </View>
                    <View style={styles.address}>
                        <Text style={styles.contactItem}>
                            221 Baker Street, Mountain View, 
                            California, United States, 741289
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Test1
