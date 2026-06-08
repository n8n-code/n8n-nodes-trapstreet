import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET",
					"value": "GET",
					"action": "GET",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"address\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
];
