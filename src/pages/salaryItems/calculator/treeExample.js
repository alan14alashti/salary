import React from 'react';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import classes from './calculator.module.css' 
const data = {
    id: 'root',
    name: ' اطلاعات کارمند ',
    value:' [اطلاعات کارمند] ',
    children: [
        {
            id: '1',
            name: ' تعداد اولاد ',
            value:' [تعداد اولاد] ',
        }
    ],
};
const dataa = {
    id: 'root',
    name: ' کارکرد ',
    value:' [کارکرد] ',
    children: [
        {
            id: '1',
            name: ' اضافه کار ',
            value:' [اضافه کار] ',
        },
        {
            id: '2',
            name: ' تاخیر ',
            value:' [تاخیر] ',
        },
        {
            id: '3',
            name:  ' کسرکار ',
            value:' [کسر کار] '
        },
        {
            id: '4',
            name: ' کارکرد تحصیلی ',
            value:' [کارکرد تحصیلی] '
        },
        {
            id: '5',
            name: ' کارکرد ',
            value:' [کارکرد] '
        }
    ],
    };
    const dataaa = {
        id: 'root',
        value:' [حکم] ',
        name: ' حکم ',
        children: [
        {
            id: '1',
            name: ' حق اولاد ',
            value:' [حق اولاد] '
        }
        ],
    };


const Tree = ({handleClick}) => {

    const renderTree = (nodes) => (
        <TreeItem onClick={!Array.isArray(nodes.children) ? () => handleClick(nodes.value): null} key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );
    return (
        <div className={classes.tree_container}>
            <TreeView
            defaultCollapseIcon={<i class="fas fa-chevron-down"></i>}
            defaultExpanded={['root']}
            defaultExpandIcon={<i class="fas fa-chevron-left"></i>}
            >
                {renderTree(data)}
            </TreeView>
            <TreeView
            defaultCollapseIcon={<i class="fas fa-chevron-down"></i>}
            defaultExpanded={['root']}
            defaultExpandIcon={<i class="fas fa-chevron-left"></i>}
            >
                {renderTree(dataa)}
            </TreeView>
            <TreeView
            defaultCollapseIcon={<i class="fas fa-chevron-down"></i>}
            defaultExpanded={['root']}
            defaultExpandIcon={<i class="fas fa-chevron-left"></i>}
            >
                {renderTree(dataaa)}
            </TreeView>
        </div>
    );
}
export default Tree;