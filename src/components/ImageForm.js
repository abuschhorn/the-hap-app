import React, {useState} from "react";
import {Typography, Button, makeStyles, Grid} from "@material-ui/core";
import RandomForm from "./RandomForm"
import SearchForm from "./SearchForm"

const useStyles = makeStyles(() => ({
    root: { 
        textAlign: "center",
        marginTop: 50,
    },
    button: {
        padding: 10,
        margin: 10,
        color: "red",
        alignSelf: "center",
    },
    input: {
        padding: 10,
        margin: 10,
        width: "50%",
    }
}))

export default function ImageForm(props) {
    const {images, posts, addToList} = props
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [post, setPost] = useState(null);
    const [random, setRandom] = useState(false);
    const [search, setSearch] = useState(false);
    const classes = useStyles();
    
    function handleRandom() {
        setSearch(false);
        setRandom(true);
        setPost({id: "INPUT"+String(Math.random()*1000), title, subtitle})
    }
    function handleSearch() {
        setRandom(false);
        setSearch(true);
        setPost({id: "INPUT"+String(Math.random()*1000), title, subtitle})
    }
    

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItem="center">
                <Grid item xs={12}><Typography variant="h2" style={{fontFamily: "Raleway"}}>New Post</Typography></Grid>
                <Grid item xs = {12}><input className={classes.input} placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/></Grid>
                <Grid item xs={12}><input className={classes.input} placeholder="Subtitle" value={subtitle} onChange={(event) => setSubtitle(event.target.value)}/></Grid>
                <Grid item xs={12}>
                    <Button variant="contained" className={classes.button} onClick={handleRandom}>Random</Button>
                    <Button variant="contained" className={classes.button} onClick={handleSearch}>Search</Button>
                    </Grid>
            </Grid>
            <div>
                { random ? 
                    <RandomForm images={images} post={post} addToList={addToList}/>
                : search ? 
                    <SearchForm images={images} post={post} addToList={addToList}/>
                : null
            }
            </div>
        </div>
    )
}