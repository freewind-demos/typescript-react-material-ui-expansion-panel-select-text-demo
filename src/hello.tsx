import {ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

export default function MyList() {

  return <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon/>}
      style={{userSelect: 'text'}}
    >
      <Typography>Expansion Panel 1</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
}
