import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import setAvatar from  '../../utils/setAvatar'
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


function Template1({ resume }) {
    
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: resume.theme.primary,
        },
        header: {
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: resume.theme.secondary,
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
            marginLeft: 50,
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
                    {resume.image ? (
                        <Image src={resume.image} style={styles.avatar}/>
                    ) : (
                        <Image src={setAvatar} style={styles.avatar}/>
                    )}
                    <View style={styles.headerRight}>
                        <Text style={styles.name}>{resume.header.name}</Text>
                        <Text style={styles.title}>{resume.header.title}</Text>
                    </View>
                </View> 
            
                <View style={styles.bio}>
                    <Text style={styles.bioText}>
                        {resume.header.bio}
                    </Text>
                </View>
                
                <View style={styles.educationContainer}>
                    <Text style={styles.eduHeading}>Education</Text>

                    {resume.education.school1 ? (
                        <View style={styles.education}>
                            <Text style={styles.eduYear}>{resume.education.edyear1}</Text>
                            <View style={styles.eduRight}>
                                <Text style={styles.eduRightTitle}>{resume.education.school1}</Text>
                                <Text style={styles.eduRightCont}>{resume.education.degree1}</Text>
                            </View>
                        </View>
                    ) : <></>}

                    {resume.education.school2 ? (
                        <View style={styles.education}>
                            <Text style={styles.eduYear}>{resume.education.edyear2}</Text>
                            <View style={styles.eduRight}>
                                <Text style={styles.eduRightTitle}>{resume.education.school2}</Text>
                                <Text style={styles.eduRightCont}>{resume.education.degree2}</Text>
                            </View>
                        </View>
                    ) : <></>}

                    {resume.education.school3 ? (
                        <View style={styles.education}>
                            <Text style={styles.eduYear}>{resume.education.edyear3}</Text>
                            <View style={styles.eduRight}>
                                <Text style={styles.eduRightTitle}>{resume.education.school3}</Text>
                                <Text style={styles.eduRightCont}>{resume.education.degree3}</Text>
                            </View>
                        </View>
                    ) : <></>}
                </View>

                <View style={styles.educationContainer}>
                    {resume.education.company1 ? (
                        <Text style={styles.eduHeading}>Experience</Text>
                    ) : (
                        <></>
                    )}

                    {resume.education.company1 ? (
                        <View style={styles.education}>
                            <Text style={styles.eduYear}>{resume.education.exyear1}</Text>
                            <View style={styles.eduRight}>
                                <Text style={styles.eduRightTitle}>{resume.education.company1}</Text>
                                <Text style={styles.eduRightCont}>{resume.education.job1}</Text>
                            </View>
                        </View>
                    ) : (
                        <></>
                    )}

                    
                    {resume.education.company2 ? (
                        <View style={styles.education}>
                            <Text style={styles.eduYear}>{resume.education.exyear2}</Text>
                            <View style={styles.eduRight}>
                                <Text style={styles.eduRightTitle}>{resume.education.company2}</Text>
                                <Text style={styles.eduRightCont}>{resume.education.job2}</Text>
                            </View>
                        </View>
                    ) : (
                        <></>
                    )}

                </View>

                <View style={styles.skillInterest}>
                    <View style={styles.skillsCont}>
                        <Text style={styles.skillInterestHeading}>Skills</Text>
                        <View>
                            {resume.skills.skill1 ? (
                                <Text style={styles.skill}>{resume.skills.skill1}</Text>
                            ) : (<></>)}

                            {resume.skills.skill2 ? (
                                <Text style={styles.skill}>{resume.skills.skill2}</Text>
                            ) : (<></>)}

                            {resume.skills.skill3 ? (
                                <Text style={styles.skill}>{resume.skills.skill3}</Text>
                            ) : (<></>)}

                            {resume.skills.skill4 ? (
                                <Text style={styles.skill}>{resume.skills.skill4}</Text>
                            ) : (<></>)}

                            {resume.skills.skill5 ? (
                                <Text style={styles.skill}>{resume.skills.skill5}</Text>
                            ) : (<></>)}
                            
                            {resume.skills.skill6 ? (
                                <Text style={styles.skill}>{resume.skills.skill6}</Text>
                            ) : (<></>)}

                            {resume.skills.skill7 ? (
                                <Text style={styles.skill}>{resume.skills.skill7}</Text>
                            ) : (<></>)}
                        </View>
                    </View>
                    <View style={styles.interestsCont}>
                        <Text style={styles.skillInterestHeading}>Interests</Text>
                        <View>
                            {resume.interests.interest1 ? (
                                <Text style={styles.skill}>{resume.interests.interest1}</Text>
                            ) : (<></>)}
                            {resume.interests.interest2 ? (
                                <Text style={styles.skill}>{resume.interests.interest2}</Text>
                            ) : (<></>)}
                            {resume.interests.interest3 ? (
                                <Text style={styles.skill}>{resume.interests.interest3}</Text>
                            ) : (<></>)}
                            {resume.interests.interest4 ? (
                                <Text style={styles.skill}>{resume.interests.interest4}</Text>
                            ) : (<></>)}
                            {resume.interests.interest5 ? (
                                <Text style={styles.skill}>{resume.interests.interest5}</Text>
                            ) : (<></>)}
                        </View>
                    </View>
                </View>

                <View style={styles.contact}>
                    <View style={styles.details}>
                        {resume.contact.phone ? (
                            <Text style={styles.contactItem}>{resume.contact.phone}</Text>
                        ) : (
                            <></>
                        )}

                        {resume.contact.email ? (
                            <Text style={styles.contactItem}>{resume.contact.email}</Text>
                        ) : (
                            <></>
                        )}



                        {resume.contact.website ? (
                        <Text style={styles.contactItem}>{resume.contact.website}</Text>
                        ) : (
                            <></>
                        )}


                    </View>
                    <View style={styles.address}>                        
                        {resume.contact.address ? (
                        <Text style={styles.contactItem}>{resume.contact.address}</Text>
                        ) : (
                            <></>
                        )}
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Template1
