import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

interface Props {
  categories: RenderTree;
  rootName?: string[];
  onClick?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

export default function RecursiveTreeView(props: Props) {
  const classes = useStyles();

  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      color={'inherit'}
      key={nodes.id}
      nodeId={nodes.id.toString()}
      onLabelClick={() => props.onClick(nodes)}
      label={nodes.name}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={props.rootName}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(props.categories)}
    </TreeView>
  );
}
