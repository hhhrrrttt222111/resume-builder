import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';


import openSans from '../../assets/fonts/OpenSans-Light.ttf'
import Alegreya from '../../assets/fonts/AlegreyaSansSC-Bold.ttf'
import ubuntu from '../../assets/fonts/UbuntuMono-Italic.ttf'
import nunito from '../../assets/fonts/Nunito-Light.ttf'
import Courgette from '../../assets/fonts/Courgette-Regular.ttf'

// Create styles
Font.register({ family: "'Open Sans', sans-serif", src: openSans });
Font.register({ family: "'Alegreya Sans SC', sans-serif", src: Alegreya });
Font.register({ family: "font-family: 'Ubuntu Mono', monospace", src: ubuntu });
Font.register({ family: "'Nunito', sans-serif", src: nunito });
Font.register({ family: "'Courgette', cursive", src: Courgette });


function Template2({ resume }) {

    console.log(resume)
    
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: resume.theme.primary,
        },
        header: {
          padding: '20px',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          backgroundColor: 'red',
        },
        avatar : {
            width: '90px',
            height: '90px',
            borderRadius: '100%',
            marginRight: 15,
            marginLeft: 15
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
        bodyContainer: {
            margin: 20,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
        },
        educationContainer: {
            marginLeft: 30,
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
            marginLeft: '-68px',
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
            justifyContent: 'flex-start'
        },
        skillsCont: {
            marginLeft: 42,
        },
        interestsCont: {
            marginLeft: 210,
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
    });


    return (
        <Document>
            <Page size="A4" style={styles.page} title="resume">
                <View style={styles.header}>
                    {resume.image ? (
                        <Image src={resume.image} style={styles.avatar}/>
                    ) : (
                        <Image src="https://avatars.githubusercontent.com/u/43471295?v=4" style={styles.avatar}/>
                    )}
                    <View style={styles.headerRight}>
                        <Text style={styles.name}>Hemanth Rajendran</Text>
                        <Text style={styles.title}>Frontend Developer</Text>
                    </View>
                </View>
            
                <View style={styles.bio}>
                    <Text style={styles.bioText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.bodyLeft}>
                        <View style={styles.educationContainer}>
                            <Text style={styles.eduHeading}>Education</Text>

                            <View style={styles.education}>
                                <View style={styles.eduRight}>
                                    <Text style={styles.eduYear}>2009 - 2015</Text>
                                    <Text style={styles.eduRightTitle}>Bhavans Vidya Mandir Eroor</Text>
                                    <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                                </View>
                            </View>


                            <View style={styles.education}>
                                <View style={styles.eduRight}>
                                    <Text style={styles.eduYear}>2009 - 2015</Text>
                                    <Text style={styles.eduRightTitle}>Bhavans Vidya Mandir Eroor</Text>
                                    <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                                </View>
                            </View>

                            <View style={styles.education}>
                                <View style={styles.eduRight}>
                                    <Text style={styles.eduYear}>2009 - 2015</Text>
                                    <Text style={styles.eduRightTitle}>Bhavans Vidya Mandir Eroor</Text>
                                    <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyRight}>     
                        <View style={styles.educationContainer}>
                            {!resume.education.company1 ? (
                                <Text style={styles.eduHeading}>Experience</Text>
                            ) : (
                                <></>
                            )}

                            <View style={styles.education}> 
                                <View style={styles.eduRight}>
                                    <Text style={styles.eduYear}>2009 - 2015</Text>
                                    <Text style={styles.eduRightTitle}>Bhavans Vidya Mandir Eroor</Text>
                                    <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                                </View>
                            </View>

                            <View style={styles.education}>
                                <View style={styles.eduRight}>
                                    <Text style={styles.eduYear}>2009 - 2015</Text>
                                    <Text style={styles.eduRightTitle}>Bhavans Vidya Mandir Eroor</Text>
                                    <Text style={styles.eduRightCont}>Higher Secondary Education</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.skillInterest}>
                    <View style={styles.skillsCont}>
                        <Text style={styles.skillInterestHeading}>Skills</Text>
                        <View>
                            {!resume.skills.skill1 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill2 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill3 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill4 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill5 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}
                            
                            {!resume.skills.skill6 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill7 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}
                        </View>
                    </View>
                    <View style={styles.interestsCont}>
                        <Text style={styles.skillInterestHeading}>Interests</Text>
                        <View>
                        {!resume.skills.skill2 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill3 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill4 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}
                            {!resume.skills.skill2 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill3 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}

                            {!resume.skills.skill4 ? (
                                <Text style={styles.skill}>HTML</Text>
                            ) : (<></>)}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Template2
