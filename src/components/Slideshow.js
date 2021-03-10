import React from "react"
import {GridList, GridListTile, GridListTileBar, makeStyles} from "@material-ui/core"
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 20,
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        height: 550,
        alignItem: "center",
      },
      listTile: {
        width: 50,
        padding: 100,
        color: "red",
      }
}))

export default function Slideshow(props) {
    const {posts} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {posts && posts.map((item) => (
          <GridListTile className={classes.listTile} key={item.id} rows={3}>
            <img src={item.img}/>
            <GridListTileBar
              title={item.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
}