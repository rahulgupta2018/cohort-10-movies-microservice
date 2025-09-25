# Agentic Code Review System - Clean Implementation Plan

**Version**: 2.1  
**Date**: September 19, 2025  
**Status**: Phase 2 (Memory & Learning Foundation) Complete - Phase 3 (Core Agent Implementation) Ready  

---

## ✅ **Phase 1 Completion Summary**

**Phase 1: Foundation Layer** has been successfully completed with the following achievements:

## 🎉 **Phase 2 Completion Summary - Memory Retrieval System**

**Phase 2: Memory & Learning Foundation** has been successfully completed with the implementation of a comprehensive memory retrieval and indexing system.

### **🧠 Memory Retrieval System Architecture** *(September 19, 2025)*

#### **Core Components Implemented:**

1. **MemoryRetriever** (`src/memory/retrieval/memory_retriever.py` - 376 lines)
   - **Multi-dimensional Indexing**: Agent, type, keyword, context, and temporal indexes
   - **ContextSignature Similarity**: Advanced similarity matching with configurable thresholds
   - **Search Capabilities**: Content search, similarity search, and multi-criteria retrieval
   - **Performance Optimization**: Efficient indexing and caching strategies

2. **ContextAwareAccessManager** (`src/memory/retrieval/context_aware_access.py` - 237 lines)
   - **AccessPattern Strategies**: RECENT, SIMILAR, CROSS_CONTEXT, TEMPORAL, CONFIDENCE_BASED patterns
   - **Analysis Phase Adaptation**: Context-aware routing based on analysis phase (initial, pattern_detection, validation, completion)
   - **Effectiveness Tracking**: Pattern performance monitoring and optimization
   - **Intelligent Filtering**: Context-based memory filtering and relevance scoring

3. **MemoryPartitionManager** (`src/memory/retrieval/memory_partitioning.py` - 301 lines)
   - **Multi-dimensional Partitioning**: 7 partition types (PROJECT, LANGUAGE, PATTERN, AGENT, TEMPORAL, COMPLEXITY, DOMAIN)
   - **Automatic Management**: Dynamic partition creation and memory organization
   - **Cross-partition Linking**: Relationship tracking and traversal capabilities
   - **Partition Statistics**: Comprehensive analytics and performance monitoring

4. **MemoryRetrievalCoordinator** (`src/memory/retrieval/retrieval_coordinator.py` - 202 lines)
   - **Unified Interface**: Single entry point for all memory retrieval operations
   - **Multi-strategy Routing**: Contextual, similarity, pattern, content, and partition-based retrieval
   - **Performance Tracking**: Execution time monitoring and system optimization
   - **Integration Layer**: Seamless coordination between all memory subsystems

#### **Retrieval Strategies Implemented:**

```python
# Supported Retrieval Methods:
- contextual_access    # Context-aware intelligent retrieval
- similarity_search    # Memory similarity matching
- pattern_matching     # Pattern-based memory access
- content_search       # Full-text content search
- partition_access     # Partition-based retrieval
```

#### **Testing & Validation:**

- **Comprehensive Test Suite**: 8 test cases covering all retrieval methods
- **Test Results**: 8/8 tests passing (100% success rate)
- **Performance**: All tests complete in 1.03 seconds
- **Coverage**: 26% overall system coverage with focused memory module testing
- **Integration**: Full integration with SQLite storage and Redis coordination

#### **Key Features:**

- **Context Signatures**: Advanced similarity matching using set-based context comparison
- **Multi-dimensional Indexing**: Efficient memory organization and retrieval
- **Access Pattern Intelligence**: Adaptive retrieval strategies based on analysis context
- **Partition-based Organization**: Intelligent memory segmentation for optimized access
- **Performance Monitoring**: Real-time system status and optimization capabilities
- **Cross-agent Memory Sharing**: Enables sophisticated multi-agent collaboration

#### **Production Readiness:**

- **Database Integration**: Full compatibility with `data/agentic_review.db` SQLite database
- **Container Support**: Tested and validated in Docker development environment
- **Error Handling**: Comprehensive error recovery and graceful degradation
- **Scalability**: Designed for enterprise-scale memory management
- **Monitoring**: Built-in system status reporting and performance tracking

### **🔧 Language Parser Configuration Migration** *(Just Completed)*
- **Eliminated Hardcoded Logic**: Removed 200+ lines of hardcoded AST node mappings from `language_parser.py`
- **YAML Configuration System**: Enhanced `config/language_config.yaml` with comprehensive 300+ line configuration
- **10 Language Support**: Complete AST mappings for Java, TypeScript, JavaScript, Swift, Kotlin, Python, SQL, Go, Rust, C#
- **Test Coverage**: 35/35 tests passing with 90%+ coverage on core modules
- **Integration Validated**: 10/10 languages operational with configuration-driven approach

### **⚡ Redis Real-time State Layer** *(Just Completed)*
- **Complete State Management**: 100% functional multi-agent coordination system
- **Session Management**: Full lifecycle tracking with status, progress, and cleanup
- **Agent Coordination**: Dependency resolution, task assignment, and message passing
- **Progress Tracking**: Real-time updates with Redis streams and WebSocket broadcasting
- **Intelligent Caching**: TTL management, tag-based invalidation, and session cleanup
- **Error Handling**: Comprehensive error recovery and connection management
- **Test Coverage**: All 35+ tests passing with comprehensive validation

### **🧠 Memory Retrieval & Indexing System** *(Just Completed)*
- **Advanced Memory Indexing**: Multi-dimensional indexing with MemoryIndex, context signatures, and similarity matching
- **Context-Aware Access**: AccessPattern-based intelligent retrieval with analysis phase adaptation
- **Memory Partitioning**: Multi-dimensional organization (PROJECT, LANGUAGE, PATTERN, AGENT, TEMPORAL, COMPLEXITY, DOMAIN)
- **Retrieval Coordination**: Unified MemoryRetrievalCoordinator with multi-strategy routing and performance tracking
- **Comprehensive Testing**: 8/8 tests passing with 26% overall coverage, all retrieval methods validated
- **Production Ready**: Full integration with SQLite storage and Redis coordination layers

### **🚀 Infrastructure Completed**
- ✅ Docker development environment with multi-service stack
- ✅ FastAPI application with API versioning and CORS support
- ✅ Configuration management system with environment variable support
- ✅ Development scripts and tooling with Poetry dependency management
- ✅ Comprehensive test suite with pytest and coverage reporting

---

## 🎯 **Project Overview**

The Agentic Code Review System is a multi-agent AI-powered code analysis platform that provides comprehensive, intelligent code review across 10+ programming languages with self-learning capabilities.

### **Core Capabilities**
- **Multi-Language Support**: Java, TypeScript, JavaScript, Swift, Kotlin, Python, SQL, Go, Rust, C#
- **Intelligent Agent System**: 6 specialized AI agents with domain expertise
- **Self-Learning**: Continuous improvement through feedback and pattern recognition
- **CI/CD Integration**: Seamless integration with GitHub, GitLab, Jenkins, Azure DevOps
- **Flexible Input**: File upload, repository cloning, manual code submission
- **Comprehensive Reports**: Executive summaries, technical details, visual analytics

---

## 🧠 **Memory-First Architecture Strategy**

**Strategic Decision**: Phase 2 focuses on Memory & Learning Foundation before agent implementation to ensure:

### **🎯 Core Benefits**
- **Zero Rework**: Agents built on solid memory foundation require no reimplementation
- **Enhanced Intelligence**: Memory-integrated agents provide context-aware insights from day one
- **Scalable Learning**: Centralized learning system supports all agents uniformly
- **Cross-Agent Collaboration**: Shared memory enables sophisticated multi-agent workflows

### **🏗️ Foundation Components**
- **Memory System**: Persistent storage for patterns, findings, and contextual knowledge
- **Learning Engine**: Pattern recognition, confidence scoring, and continuous improvement
- **State Management**: Multi-agent coordination and analysis state tracking
- **Agent Framework**: Memory-aware base classes and interfaces

### **📈 Long-term Impact**
- **Faster Development**: Subsequent agents leverage existing memory infrastructure
- **Better Insights**: Historical context and learned patterns enhance analysis quality
- **Adaptive System**: Continuous learning improves accuracy and reduces false positives
- **Production Ready**: Memory-first architecture supports enterprise-scale deployments

---

## 📋 **Implementation Phases**

### **Phase 1: Foundation Layer (Weeks 1-4)** - ✅ **COMPLETED**
- ✅ Docker development environment setup
- ✅ Project structure and dependency management  
- ✅ FastAPI application with API versioning (v1)
- ✅ **Configuration management system - COMPLETED**
  - ✅ Environment-driven configuration (no defaults)
  - ✅ LLM provider logic driven by LLM_PROVIDER variable
  - ✅ YAML configuration with environment variable substitution
  - ✅ Type conversion and validation
  - ✅ Modern Pydantic v2 implementation
- ✅ Development scripts and tooling
- ✅ **Multi-language AST parsing with Tree-sitter - COMPLETED**
  - ✅ Configuration-driven language parser (removed hardcoded fallback logic)
  - ✅ YAML-based language configuration (300+ lines, 10 languages)
  - ✅ AST node mappings migration from hardcode to configuration
  - ✅ Comprehensive testing (35/35 tests passing, 90%+ coverage)
  - ✅ Support for Java, TypeScript, JavaScript, Swift, Kotlin, Python, SQL, Go, Rust, C#
- ✅ **Language configuration system - COMPLETED**
  - ✅ Enhanced language_config.yaml with AST node mappings
  - ✅ LanguageConfigManager with get_ast_node_mappings() method
  - ✅ Integration testing with 10/10 languages operational
- ✅ **Input processing layer - COMPLETED**
  - ✅ Comprehensive ingestion engine (489 lines, multiple sources)
  - ✅ File discovery and preprocessing with filtering
  - ✅ Support for local, git, GitHub API, GitLab API, ZIP, single file
  - ✅ Configuration-driven include/exclude patterns
  - ✅ Language detection and metadata extraction

### **Phase 2: Memory & Learning Foundation (Weeks 5-8)** - ✅ **LEARNING FOUNDATION COMPLETE**
- ✅ **Memory System Architecture** *(Memory models, SQLite storage, and retrieval system completed)*
  - ✅ **SQLite Persistent Memory Layer** - Agent learning and experience storage
    - ✅ Memory models (MemoryEntry, AnalysisExperience, PatternRecognition)
    - ✅ SQLite storage implementation with comprehensive schema
    - ✅ Memory interfaces and repository pattern
    - ✅ Agent memory profiles and specialized storage
  - ✅ **Redis Real-time State Layer** - Multi-agent coordination and caching *(COMPLETED)*
    - ✅ Analysis session state management
    - ✅ Agent coordination and messaging
    - ✅ Progress tracking and real-time updates
    - ✅ Temporary analysis data and intermediate results
    - ✅ Redis connection management with pooling and health checks
    - ✅ Multi-agent dependency resolution and task coordination
    - ✅ Real-time WebSocket progress broadcasting with Redis streams
    - ✅ Intelligent caching with TTL and tag-based invalidation
  - ✅ **Memory Retrieval and Indexing System** *(COMPLETED)*
    - ✅ Multi-dimensional memory indexing with MemoryIndex
    - ✅ Context signature similarity matching and search
    - ✅ Agent-specific, type-based, and keyword indexing
    - ✅ Temporal and content-based memory organization
  - ✅ **Context-aware Memory Access Patterns** *(COMPLETED)*
    - ✅ AccessPattern-based intelligent retrieval strategies
    - ✅ Analysis phase-aware memory routing
    - ✅ Effectiveness tracking and pattern optimization
    - ✅ Contextual memory filtering and ranking
  - ✅ **Memory Partitioning System** *(COMPLETED)*
    - ✅ Multi-dimensional partitioning (PROJECT, LANGUAGE, PATTERN, AGENT, TEMPORAL, COMPLEXITY, DOMAIN)
    - ✅ Automatic partition creation and management
    - ✅ Cross-partition linking and relationship tracking
    - ✅ Partition-based retrieval optimization
  - ✅ **Memory Retrieval Coordination** *(COMPLETED)*
    - ✅ Unified MemoryRetrievalCoordinator interface
    - ✅ Multi-strategy retrieval routing (contextual, similarity, pattern, content, partition)
    - ✅ Performance tracking and system status monitoring
    - ✅ Integration with all memory subsystems
- ✅ **Learning System Foundation** *(COMPLETED)*
  - ✅ Pattern recognition and storage
  - ✅ Confidence scoring and validation mechanisms
  - ✅ Feedback loop integration for continuous learning
  - ✅ Knowledge base management and versioning
- ✅ **State Management System** *(Redis-based coordination layer - COMPLETED)*
  - ✅ **Redis State Coordination**
    - ✅ Analysis workflow state tracking
    - ✅ Multi-agent synchronization and communication
    - ✅ Real-time progress monitoring and WebSocket updates
    - ✅ Session management and timeout handling
  - ✅ **Distributed Analysis Coordination**
    - ✅ Agent task queue management
    - ✅ Result aggregation and cross-validation
    - ✅ Rollback capabilities and error recovery
    - ✅ Load balancing and resource allocation

### **Phase 3: Core Agent Implementation (Weeks 9-12)** - 🚀 **BASE FRAMEWORK COMPLETE**
- ✅ **Base Agent Framework** *(COMPLETED)*
  - ✅ BaseAgent abstract class with comprehensive memory integration
  - ✅ Agent result and finding management with evidence support
  - ✅ Configuration-driven agent behavior (no hardcoding)
  - ✅ Comprehensive error handling and timeout mechanisms
  - ✅ Bias prevention and hallucination checking at agent level
  - ✅ Quality control with multi-layer validation
  - ✅ Standardized finding and recommendation structures
- ✅ **Master Orchestrator** *(COMPLETED)*
  - ✅ Central intelligence hub for workflow coordination
  - ✅ Smart agent selection based on code characteristics
  - ✅ Parallel processing coordination across multiple agents
  - ✅ Context preservation and cross-agent memory sharing
  - ✅ Dynamic routing with bias and hallucination prevention
  - ✅ Result aggregation and cross-validation
  - ✅ Configuration-driven orchestration strategies
- ⏳ **Code Analyzer Agent** (complete implementation with memory)
  - ⏳ Complexity analysis with historical context
  - ⏳ Pattern detection using learned patterns
  - ⏳ Architecture analysis with memory-driven insights
- ⏳ **Engineering Practices Agent**
  - ⏳ SOLID principles validation with learning
  - ⏳ Code quality metrics with trend analysis
  - ⏳ Best practices enforcement with context awareness
- ⏳ **Security Standards Agent**
  - ⏳ OWASP vulnerability detection with memory
  - ⏳ Security pattern recognition and learning
  - ⏳ Threat modeling with historical analysis

### **Phase 4: Advanced Agents & Orchestration (Weeks 13-16)** - ⏳ **PENDING**
- ⏳ **Carbon Efficiency Agent**
  - ⏳ Performance analysis with memory-driven optimization
  - ⏳ Resource usage pattern learning
- ⏳ **Cloud Native Agent**
  - ⏳ 12-factor app compliance with context learning
  - ⏳ Container optimization patterns
- ⏳ **Microservices Agent**
  - ⏳ Service boundary analysis with architectural memory
  - ⏳ API design patterns and learning
- ⏳ **Agent Orchestration & Workflow**
  - ⏳ LangGraph multi-agent coordination
  - ⏳ Cross-agent memory sharing and collaboration
  - ⏳ Intelligent agent selection based on context

### **Phase 5: Integration & Production (Weeks 17-20)** - ⏳ **PENDING**
- ⏳ CI/CD integrations
- ⏳ Web interface and dashboard
- ⏳ Advanced analytics and reporting
- ⏳ Production deployment and monitoring

---

## 🏗️ **System Architecture**

```
agentic-code-review/
├── src/
│   ├── core/                          # Core system components
│   │   ├── config/                    # Configuration management
│   │   ├── input/                     # Input processing
│   │   ├── orchestrator/              # LangGraph workflow orchestration
│   │   └── output/                    # Report generation
│   ├── agents/                        # Specialized AI agents
│   │   ├── base/                      # Base agent framework
│   │   ├── code_analyzer/             # Code structure & complexity
│   │   ├── engineering_practices/     # SOLID, patterns, quality
│   │   ├── security_standards/        # OWASP, vulnerabilities
│   │   ├── carbon_efficiency/         # Performance & sustainability
│   │   ├── cloud_native/              # 12-factor, containers
│   │   └── microservices/             # Service boundaries, APIs
│   ├── memory/                        # Agent memory and learning
│   │   ├── storage/                   # Memory persistence
│   │   ├── learning/                  # Self-improvement algorithms
│   │   └── retrieval/                 # Context-aware memory access
│   ├── integrations/                  # External integrations
│   │   ├── cicd/                      # CI/CD platform plugins
│   │   ├── repositories/              # Git repository handling
│   │   └── llm/                       # LLM provider management
│   └── api/                           # REST API and web interface
│       ├── routes/                    # API endpoints
│       │   └── v1/                    # API version 1 endpoints
│       │       ├── system.py          # Health and status endpoints
│       │       ├── analysis.py        # Code analysis endpoints
│       │       └── router.py          # Route configuration
│       ├── websockets/                # Real-time updates
│       └── web/                       # Web dashboard
├── config/                            # Configuration files
│   ├── environments/                  # Environment-specific configs
│   ├── agents/                        # Agent configurations
│   ├── llm/                          # LLM provider settings
│   └── rules/                        # Analysis rules and thresholds
├── data/                             # Data storage
│   ├── agent_memory/                 # Persistent agent memory
│   ├── analysis_cache/               # Analysis result cache
│   └── knowledge_base/               # Learned patterns and rules
├── tests/                            # Comprehensive test suite
├── docs/                             # Documentation
├── scripts/                          # Deployment and utility scripts
├── Dockerfile                        # Multi-stage Docker build
├── docker-compose.yml               # Development stack
└── k8s/                              # Kubernetes manifests
```

### **🗄️ Storage Architecture**

The system employs a **dual-storage strategy** with SQLite and Redis serving distinct but complementary roles:

#### **SQLite: Persistent Agent Memory** 🧠
- **Purpose**: Long-term agent learning and intelligence accumulation
- **Data Types**:
  - Analysis experiences and learned patterns
  - Agent memory profiles and historical context
  - Pattern recognition data and confidence scores
  - Cross-project learning insights
- **Characteristics**: 
  - Persistent disk storage for durability
  - Structured relational data with complex queries
  - ACID compliance for data integrity
  - Offline-capable and self-contained

#### **Redis: Real-time System Coordination** ⚡
- **Purpose**: High-speed operational coordination and caching
- **Data Types**:
  - Analysis session state and progress tracking
  - Multi-agent coordination messages
  - Real-time WebSocket connections
  - API response caching and rate limiting
  - Temporary analysis results and intermediate data
- **Characteristics**:
  - In-memory storage for sub-millisecond access
  - Pub/Sub messaging for real-time coordination
  - Automatic expiration for session management
  - Distributed system coordination

**Redis Data Structures:**
```
Keys Pattern Structure:
├── session:<session_id>                    # Session metadata (JSON)
├── active_sessions                         # Set of active session IDs
├── agent:<session_id>:<agent_id>          # Agent state (JSON)
├── session_agents:<session_id>            # Set of agent IDs in session
├── progress:<session_id>                  # Session progress (JSON)
├── progress_agent:<session_id>:<agent_id> # Agent-specific progress (JSON)
├── progress_stream:sessions               # Real-time progress stream
├── cache:analysis_cache:<session_id>:<agent_id>   # Analysis results cache
├── cache:api_cache:<endpoint>:<hash>      # API response cache
├── cache:temp_data:<session_id>:<type>    # Temporary analysis data
├── cache_meta:<cache_key>                 # Cache metadata (TTL, tags)
├── cache_tags:<tag>                       # Set of cache keys by tag
├── message:<session_id>:<message_id>      # Coordination messages
└── message_queue:<session_id>             # Prioritized message queue (ZSET)
```

#### **Architecture Benefits**
```
┌─────────────────────┐    ┌─────────────────────┐
│      SQLite         │    │       Redis         │
│   Agent Memory      │    │   System State      │
├─────────────────────┤    ├─────────────────────┤
│ • Learned Patterns  │    │ • Session State     │
│ • Analysis History  │    │ • Agent Messages    │
│ • Confidence Scores │    │ • Progress Tracking │
│ • Agent Profiles    │    │ • API Cache         │
│                     │    │ • Real-time Updates │
├─────────────────────┤    ├─────────────────────┤
│ PERSISTENT LEARNING │    │ EPHEMERAL OPERATIONS│
│ Cross-Analysis      │    │ Real-time           │
│ Intelligence        │    │ Coordination        │
└─────────────────────┘    └─────────────────────┘
          ↓                            ↓
    Agent Intelligence            System Performance
```

---

## ⚙️ **Configuration System**

### **Environment Configuration**

```yaml
# .env (environment variables)
# Application Environment
ENVIRONMENT=development
LOG_LEVEL=INFO
DEBUG=true

# Database Configuration
DATABASE_URL=sqlite:///data/agentic_review.db
REDIS_URL=redis://localhost:6379/0

# LLM Provider Configuration
DEFAULT_LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
OPENAI_API_KEY=your_openai_key
OPENAI_BASE_URL=https://api.openai.com/v1
GEMINI_API_KEY=your_gemini_key
GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta

# CI/CD Integration
GITHUB_APP_ID=your_github_app_id
GITHUB_PRIVATE_KEY_PATH=/path/to/private-key.pem
GITLAB_ACCESS_TOKEN=your_gitlab_token

# Security
SECRET_KEY=your_secret_key
JWT_SECRET=your_jwt_secret

# Performance
MAX_CONCURRENT_ANALYSES=5
ANALYSIS_TIMEOUT=300
MEMORY_LIMIT_MB=2048
```

### **Main Application Configuration**

```yaml
# config/app.yaml
application:
  name: "Agentic Code Review System"
  version: "2.0.0"
  environment: ${ENVIRONMENT}
  
system:
  max_file_size_mb: 10
  max_repository_size_mb: 500
  supported_languages:
    - java
    - typescript
    - javascript
    - swift
    - kotlin
    - python
    - sql
    - go
    - rust
    - csharp
  
analysis:
  default_timeout: 300
  max_concurrent_agents: 6
  enable_parallel_execution: true
  enable_caching: true
  cache_ttl_hours: 24

memory:
  enable_learning: true
  memory_retention_days: 90
  enable_cross_project_learning: true
  confidence_threshold: 0.7

reporting:
  default_formats: [json, html]
  include_code_snippets: true
  max_findings_per_category: 50
  enable_executive_summary: true
```

### **Agent Configuration**

```yaml
# config/agents/code_analyzer.yaml
agent:
  id: "code_analyzer"
  name: "Code Analyzer Agent"
  description: "Analyzes code structure, complexity, and architecture patterns"
  
analysis:
  enabled_features:
    - complexity_metrics
    - pattern_detection
    - architecture_analysis
    - dependency_analysis
  
  complexity_thresholds:
    cyclomatic_complexity:
      java: 12
      typescript: 15
      javascript: 15
      python: 10
      default: 12
    
    cognitive_complexity:
      java: 15
      typescript: 18
      javascript: 18
      python: 12
      default: 15
    
    class_length:
      java: 300
      typescript: 250
      javascript: 250
      python: 200
      default: 250

  patterns:
    mvc_detection: true
    microservices_detection: true
    rest_api_detection: true
    design_patterns: true

llm:
  provider: ${DEFAULT_LLM_PROVIDER}
  model: "codellama:13b"
  temperature: 0.1
  max_tokens: 4000
  
  system_prompt: |
    You are an expert code analyzer with deep knowledge of software architecture and design patterns.
    Analyze code for structure, complexity, maintainability, and architectural patterns.
    Provide specific, actionable recommendations with confidence scores.
    
    Focus on:
    - Code complexity and maintainability
    - Architecture patterns and anti-patterns
    - Design quality and technical debt
    - Language-specific best practices
```

### **LLM Provider Configuration**

```yaml
# config/llm/providers.yaml
providers:
  ollama:
    type: "local"
    base_url: ${OLLAMA_BASE_URL}
    timeout: 60
    retry_attempts: 3
    models:
      code_analysis: "codellama:13b"
      general: "llama3.1:8b"
      
  openai:
    type: "cloud"
    api_key: ${OPENAI_API_KEY}
    base_url: ${OPENAI_BASE_URL}
    timeout: 30
    retry_attempts: 3
    rate_limit: 60
    models:
      code_analysis: "gpt-4"
      general: "gpt-4o-mini"
      
  gemini:
    type: "cloud"
    api_key: ${GEMINI_API_KEY}
    base_url: ${GEMINI_BASE_URL}
    timeout: 30
    retry_attempts: 3
    rate_limit: 60
    models:
      code_analysis: "gemini-1.5-pro"
      general: "gemini-1.5-flash"

cost_optimization:
  enable: true
  local_first: true
  model_selection_strategy: "cost_efficient"
  
routing:
  simple_tasks: ["ollama", "gemini-flash"]
  complex_tasks: ["gemini-pro", "gpt-4"]
  fallback_order: ["ollama", "gemini", "openai"]
```

---

## 🔧 **Phase 1: Foundation Layer Implementation**

### **1.1 Core Infrastructure Setup**

#### **Project Structure Setup**
```bash
# Initialize project
mkdir agentic-code-review
cd agentic-code-review

# Create directory structure
mkdir -p src/{core/{config,input,orchestrator,output},agents/{base,code_analyzer,engineering_practices,security_standards,carbon_efficiency,cloud_native,microservices},memory/{storage,learning,retrieval},integrations/{cicd,repositories,llm},api/{routes,websockets,web}}
mkdir -p config/{environments,agents,llm,rules}
mkdir -p data/{agent_memory,analysis_cache,knowledge_base}
mkdir -p tests docker k8s scripts docs

# Initialize Python project
poetry init
poetry add fastapi uvicorn sqlalchemy alembic redis langchain langgraph tree-sitter pydantic pyyaml jinja2 aiofiles aiosqlite python-multipart
poetry add --group dev pytest pytest-asyncio black isort mypy pre-commit
```

#### **Configuration Management System**

```python
# src/core/config/config_manager.py
import os
import yaml
from pathlib import Path
from typing import Dict, Any, Optional
from pydantic import BaseSettings, Field
from functools import lru_cache

class Settings(BaseSettings):
    """Application settings with environment variable support"""
    
    # Application
    environment: str = Field(default="development", env="ENVIRONMENT")
    log_level: str = Field(default="INFO", env="LOG_LEVEL")
    debug: bool = Field(default=False, env="DEBUG")
    
    # Database
    database_url: str = Field(..., env="DATABASE_URL")
    redis_url: str = Field(..., env="REDIS_URL")
    
    # LLM Providers
    default_llm_provider: str = Field(default="ollama", env="DEFAULT_LLM_PROVIDER")
    ollama_base_url: str = Field(default="http://localhost:11434", env="OLLAMA_BASE_URL")
    openai_api_key: Optional[str] = Field(None, env="OPENAI_API_KEY")
    openai_base_url: str = Field(default="https://api.openai.com/v1", env="OPENAI_BASE_URL")
    gemini_api_key: Optional[str] = Field(None, env="GEMINI_API_KEY")
    gemini_base_url: str = Field(default="https://generativelanguage.googleapis.com/v1beta", env="GEMINI_BASE_URL")
    
    # Security
    secret_key: str = Field(..., env="SECRET_KEY")
    jwt_secret: str = Field(..., env="JWT_SECRET")
    
    # Performance
    max_concurrent_analyses: int = Field(default=5, env="MAX_CONCURRENT_ANALYSES")
    analysis_timeout: int = Field(default=300, env="ANALYSIS_TIMEOUT")
    memory_limit_mb: int = Field(default=2048, env="MEMORY_LIMIT_MB")
    
    class Config:
        env_file = ".env"
        case_sensitive = False

class ConfigManager:
    """Centralized configuration management"""
    
    def __init__(self, config_dir: str = "config"):
        self.config_dir = Path(config_dir)
        self.settings = Settings()
        self._config_cache: Dict[str, Any] = {}
    
    @lru_cache(maxsize=128)
    def load_config(self, config_path: str) -> Dict[str, Any]:
        """Load configuration file with caching"""
        full_path = self.config_dir / config_path
        
        if not full_path.exists():
            raise FileNotFoundError(f"Configuration file not found: {full_path}")
        
        with open(full_path, 'r') as f:
            config = yaml.safe_load(f)
        
        # Environment variable substitution
        return self._substitute_env_vars(config)
    
    def _substitute_env_vars(self, config: Any) -> Any:
        """Recursively substitute environment variables in config"""
        if isinstance(config, dict):
            return {k: self._substitute_env_vars(v) for k, v in config.items()}
        elif isinstance(config, list):
            return [self._substitute_env_vars(item) for item in config]
        elif isinstance(config, str) and config.startswith('${') and config.endswith('}'):
            env_var = config[2:-1]
            return os.getenv(env_var, config)
        return config
    
    def get_agent_config(self, agent_id: str) -> Dict[str, Any]:
        """Get configuration for specific agent"""
        return self.load_config(f"agents/{agent_id}.yaml")
    
    def get_llm_config(self) -> Dict[str, Any]:
        """Get LLM provider configuration"""
        return self.load_config("llm/providers.yaml")
    
    def get_app_config(self) -> Dict[str, Any]:
        """Get main application configuration"""
        return self.load_config("app.yaml")

@lru_cache()
def get_config_manager() -> ConfigManager:
    """Get singleton configuration manager"""
    return ConfigManager()
```

### **1.2 Multi-Language AST Parsing System**

```python
# src/core/input/language_parser.py
import tree_sitter
from tree_sitter import Language, Parser
from typing import Dict, Optional, List, Any
from pathlib import Path
from enum import Enum
import logging

logger = logging.getLogger(__name__)

class SupportedLanguage(Enum):
    JAVA = "java"
    TYPESCRIPT = "typescript"
    JAVASCRIPT = "javascript"
    SWIFT = "swift"
    KOTLIN = "kotlin"
    PYTHON = "python"
    SQL = "sql"
    GO = "go"
    RUST = "rust"
    CSHARP = "csharp"

class TreeSitterManager:
    """Manages Tree-sitter parsers for multiple languages"""
    
    def __init__(self):
        self.parsers: Dict[SupportedLanguage, Parser] = {}
        self.languages: Dict[SupportedLanguage, Language] = {}
        self._initialize_parsers()
    
    def _initialize_parsers(self):
        """Initialize Tree-sitter parsers for all supported languages"""
        try:
            # Build languages (this would be done once during setup)
            Language.build_library(
                'build/languages.so',
                [
                    'vendor/tree-sitter-java',
                    'vendor/tree-sitter-typescript/typescript',
                    'vendor/tree-sitter-javascript',
                    'vendor/tree-sitter-swift',
                    'vendor/tree-sitter-kotlin',
                    'vendor/tree-sitter-python',
                    'vendor/tree-sitter-sql',
                    'vendor/tree-sitter-go',
                    'vendor/tree-sitter-rust',
                    'vendor/tree-sitter-c-sharp',
                ]
            )
            
            # Load languages
            language_mappings = {
                SupportedLanguage.JAVA: Language('build/languages.so', 'java'),
                SupportedLanguage.TYPESCRIPT: Language('build/languages.so', 'typescript'),
                SupportedLanguage.JAVASCRIPT: Language('build/languages.so', 'javascript'),
                SupportedLanguage.SWIFT: Language('build/languages.so', 'swift'),
                SupportedLanguage.KOTLIN: Language('build/languages.so', 'kotlin'),
                SupportedLanguage.PYTHON: Language('build/languages.so', 'python'),
                SupportedLanguage.SQL: Language('build/languages.so', 'sql'),
                SupportedLanguage.GO: Language('build/languages.so', 'go'),
                SupportedLanguage.RUST: Language('build/languages.so', 'rust'),
                SupportedLanguage.CSHARP: Language('build/languages.so', 'c_sharp'),
            }
            
            # Initialize parsers
            for lang_enum, language in language_mappings.items():
                parser = Parser()
                parser.set_language(language)
                self.parsers[lang_enum] = parser
                self.languages[lang_enum] = language
                
            logger.info(f"Initialized parsers for {len(self.parsers)} languages")
            
        except Exception as e:
            logger.error(f"Failed to initialize Tree-sitter parsers: {e}")
            raise
    
    def parse_code(self, code: str, language: SupportedLanguage) -> Optional[tree_sitter.Tree]:
        """Parse code using appropriate Tree-sitter parser"""
        if language not in self.parsers:
            logger.warning(f"Parser not available for language: {language}")
            return None
        
        try:
            parser = self.parsers[language]
            tree = parser.parse(bytes(code, "utf8"))
            return tree
        except Exception as e:
            logger.error(f"Failed to parse {language} code: {e}")
            return None
    
    def get_supported_languages(self) -> List[SupportedLanguage]:
        """Get list of supported languages"""
        return list(self.parsers.keys())

class CodeFile:
    """Represents a code file with metadata"""
    
    def __init__(self, path: str, content: str, language: Optional[SupportedLanguage] = None):
        self.path = Path(path)
        self.content = content
        self.language = language or self._detect_language()
        self.size_bytes = len(content.encode('utf-8'))
        self.line_count = len(content.splitlines())
    
    def _detect_language(self) -> Optional[SupportedLanguage]:
        """Detect language from file extension"""
        extension_mapping = {
            '.java': SupportedLanguage.JAVA,
            '.ts': SupportedLanguage.TYPESCRIPT,
            '.js': SupportedLanguage.JAVASCRIPT,
            '.jsx': SupportedLanguage.JAVASCRIPT,
            '.swift': SupportedLanguage.SWIFT,
            '.kt': SupportedLanguage.KOTLIN,
            '.kts': SupportedLanguage.KOTLIN,
            '.py': SupportedLanguage.PYTHON,
            '.sql': SupportedLanguage.SQL,
            '.go': SupportedLanguage.GO,
            '.rs': SupportedLanguage.RUST,
            '.cs': SupportedLanguage.CSHARP,
        }
        return extension_mapping.get(self.path.suffix.lower())

class ASTAnalyzer:
    """Language-agnostic AST analysis"""
    
    def __init__(self, tree_sitter_manager: TreeSitterManager):
        self.ts_manager = tree_sitter_manager
    
    def analyze_file(self, code_file: CodeFile) -> Dict[str, Any]:
        """Perform comprehensive AST analysis"""
        if not code_file.language:
            return self._fallback_analysis(code_file)
        
        tree = self.ts_manager.parse_code(code_file.content, code_file.language)
        if not tree:
            return self._fallback_analysis(code_file)
        
        analysis = {
            'file_info': {
                'path': str(code_file.path),
                'language': code_file.language.value,
                'size_bytes': code_file.size_bytes,
                'line_count': code_file.line_count,
            },
            'complexity_metrics': self._calculate_complexity(tree, code_file.language),
            'structure_analysis': self._analyze_structure(tree, code_file.language),
            'pattern_detection': self._detect_patterns(tree, code_file.language),
        }
        
        return analysis
    
    def _calculate_complexity(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> Dict[str, Any]:
        """Calculate complexity metrics from AST"""
        # Implementation will vary by language
        return {
            'cyclomatic_complexity': self._calculate_cyclomatic_complexity(tree, language),
            'cognitive_complexity': self._calculate_cognitive_complexity(tree, language),
            'halstead_metrics': self._calculate_halstead_metrics(tree, language),
            'nesting_depth': self._calculate_nesting_depth(tree, language),
        }
    
    def _analyze_structure(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> Dict[str, Any]:
        """Analyze code structure from AST"""
        return {
            'classes': self._count_classes(tree, language),
            'functions': self._count_functions(tree, language),
            'interfaces': self._count_interfaces(tree, language),
            'imports': self._extract_imports(tree, language),
        }
    
    def _detect_patterns(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> Dict[str, Any]:
        """Detect architectural and design patterns"""
        return {
            'mvc_pattern': self._detect_mvc_pattern(tree, language),
            'singleton_pattern': self._detect_singleton_pattern(tree, language),
            'factory_pattern': self._detect_factory_pattern(tree, language),
            'observer_pattern': self._detect_observer_pattern(tree, language),
        }
    
    def _fallback_analysis(self, code_file: CodeFile) -> Dict[str, Any]:
        """Fallback analysis for unsupported languages"""
        return {
            'file_info': {
                'path': str(code_file.path),
                'language': code_file.language.value if code_file.language else 'unknown',
                'size_bytes': code_file.size_bytes,
                'line_count': code_file.line_count,
            },
            'analysis_type': 'fallback',
            'message': 'Language-specific analysis not available'
        }
    
    # Language-specific complexity calculation methods would be implemented here
    def _calculate_cyclomatic_complexity(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Calculate cyclomatic complexity (McCabe complexity)"""
        # Implementation varies by language
        return 1  # Placeholder
    
    def _calculate_cognitive_complexity(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Calculate cognitive complexity"""
        # Implementation varies by language
        return 1  # Placeholder
    
    def _calculate_halstead_metrics(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> Dict[str, float]:
        """Calculate Halstead complexity metrics"""
        # Implementation varies by language
        return {'volume': 0.0, 'difficulty': 0.0, 'effort': 0.0}  # Placeholder
    
    def _calculate_nesting_depth(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Calculate maximum nesting depth"""
        # Implementation varies by language
        return 1  # Placeholder
    
    # Structure analysis methods
    def _count_classes(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Count classes in the AST"""
        # Implementation varies by language
        return 0  # Placeholder
    
    def _count_functions(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Count functions/methods in the AST"""
        # Implementation varies by language
        return 0  # Placeholder
    
    def _count_interfaces(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> int:
        """Count interfaces in the AST"""
        # Implementation varies by language
        return 0  # Placeholder
    
    def _extract_imports(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> List[str]:
        """Extract import statements"""
        # Implementation varies by language
        return []  # Placeholder
    
    # Pattern detection methods
    def _detect_mvc_pattern(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> bool:
        """Detect MVC pattern indicators"""
        # Implementation varies by language
        return False  # Placeholder
    
    def _detect_singleton_pattern(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> bool:
        """Detect Singleton pattern"""
        # Implementation varies by language
        return False  # Placeholder
    
    def _detect_factory_pattern(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> bool:
        """Detect Factory pattern"""
        # Implementation varies by language
        return False  # Placeholder
    
    def _detect_observer_pattern(self, tree: tree_sitter.Tree, language: SupportedLanguage) -> bool:
        """Detect Observer pattern"""
        # Implementation varies by language
        return False  # Placeholder
```

### **1.3 Input Processing Layer**

```python
# src/core/input/input_processor.py
import asyncio
import tempfile
import zipfile
import tarfile
from pathlib import Path
from typing import List, Dict, Any, Optional, Union
import aiofiles
import git
from fastapi import UploadFile
import logging

from .language_parser import CodeFile, SupportedLanguage, TreeSitterManager, ASTAnalyzer

logger = logging.getLogger(__name__)

class CodeContext:
    """Represents the complete context of code to be analyzed"""
    
    def __init__(self):
        self.files: List[CodeFile] = []
        self.metadata: Dict[str, Any] = {}
        self.source_type: str = ""  # file_upload, repository, snippet
        self.analysis_id: str = ""
    
    def add_file(self, code_file: CodeFile):
        """Add a code file to the context"""
        self.files.append(code_file)
    
    def get_files_by_language(self, language: SupportedLanguage) -> List[CodeFile]:
        """Get files filtered by programming language"""
        return [f for f in self.files if f.language == language]
    
    def get_total_size(self) -> int:
        """Get total size of all files in bytes"""
        return sum(f.size_bytes for f in self.files)
    
    def get_language_distribution(self) -> Dict[str, int]:
        """Get distribution of languages in the codebase"""
        distribution = {}
        for file in self.files:
            lang = file.language.value if file.language else 'unknown'
            distribution[lang] = distribution.get(lang, 0) + 1
        return distribution

class InputProcessor:
    """Handles various input methods for code analysis"""
    
    def __init__(self, config_manager):
        self.config = config_manager
        self.ts_manager = TreeSitterManager()
        self.ast_analyzer = ASTAnalyzer(self.ts_manager)
        self.max_file_size = self.config.get_app_config()['system']['max_file_size_mb'] * 1024 * 1024
        self.max_repo_size = self.config.get_app_config()['system']['max_repository_size_mb'] * 1024 * 1024
        self.supported_extensions = {
            '.java', '.ts', '.js', '.jsx', '.swift', '.kt', '.kts', 
            '.py', '.sql', '.go', '.rs', '.cs'
        }
    
    async def process_file_upload(self, files: List[UploadFile]) -> CodeContext:
        """Process uploaded files"""
        context = CodeContext()
        context.source_type = "file_upload"
        
        total_size = 0
        for upload_file in files:
            # Check file size
            content = await upload_file.read()
            if len(content) > self.max_file_size:
                logger.warning(f"File {upload_file.filename} exceeds size limit")
                continue
            
            total_size += len(content)
            if total_size > self.max_repo_size:
                logger.warning("Total upload size exceeds limit")
                break
            
            # Process file
            if self._is_supported_file(upload_file.filename):
                code_file = CodeFile(
                    path=upload_file.filename,
                    content=content.decode('utf-8', errors='ignore')
                )
                context.add_file(code_file)
        
        context.metadata = {
            'total_files': len(context.files),
            'total_size': context.get_total_size(),
            'language_distribution': context.get_language_distribution()
        }
        
        return context
    
    async def process_zip_upload(self, zip_file: UploadFile) -> CodeContext:
        """Process uploaded ZIP file"""
        context = CodeContext()
        context.source_type = "zip_upload"
        
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix='.zip') as tmp_file:
            content = await zip_file.read()
            tmp_file.write(content)
            tmp_path = tmp_file.name
        
        try:
            # Extract and process ZIP
            with zipfile.ZipFile(tmp_path, 'r') as zip_ref:
                for file_info in zip_ref.filelist:
                    if file_info.is_dir() or not self._is_supported_file(file_info.filename):
                        continue
                    
                    if file_info.file_size > self.max_file_size:
                        continue
                    
                    try:
                        with zip_ref.open(file_info) as file:
                            content = file.read().decode('utf-8', errors='ignore')
                            code_file = CodeFile(path=file_info.filename, content=content)
                            context.add_file(code_file)
                    except Exception as e:
                        logger.warning(f"Failed to process file {file_info.filename}: {e}")
                        continue
        
        finally:
            Path(tmp_path).unlink()  # Clean up temporary file
        
        context.metadata = {
            'total_files': len(context.files),
            'total_size': context.get_total_size(),
            'language_distribution': context.get_language_distribution()
        }
        
        return context
    
    async def process_repository(self, repo_url: str, branch: str = "main", 
                                access_token: Optional[str] = None) -> CodeContext:
        """Clone and process Git repository"""
        context = CodeContext()
        context.source_type = "repository"
        
        # Create temporary directory for cloning
        with tempfile.TemporaryDirectory() as tmp_dir:
            try:
                # Prepare clone URL with authentication if provided
                clone_url = repo_url
                if access_token and 'github.com' in repo_url:
                    clone_url = repo_url.replace('https://', f'https://{access_token}@')
                
                # Clone repository
                repo = git.Repo.clone_from(clone_url, tmp_dir, branch=branch, depth=1)
                
                # Process repository files
                repo_path = Path(tmp_dir)
                await self._process_directory(repo_path, context)
                
                # Add repository metadata
                context.metadata = {
                    'repository_url': repo_url,
                    'branch': branch,
                    'commit_hash': repo.head.commit.hexsha,
                    'total_files': len(context.files),
                    'total_size': context.get_total_size(),
                    'language_distribution': context.get_language_distribution()
                }
                
            except Exception as e:
                logger.error(f"Failed to process repository {repo_url}: {e}")
                raise
        
        return context
    
    async def process_code_snippet(self, code: str, language: str, filename: str = "snippet") -> CodeContext:
        """Process a single code snippet"""
        context = CodeContext()
        context.source_type = "snippet"
        
        # Determine language
        try:
            lang_enum = SupportedLanguage(language.lower())
        except ValueError:
            lang_enum = None
        
        code_file = CodeFile(path=filename, content=code, language=lang_enum)
        context.add_file(code_file)
        
        context.metadata = {
            'snippet_language': language,
            'snippet_size': len(code),
            'snippet_lines': len(code.splitlines())
        }
        
        return context
    
    async def _process_directory(self, directory: Path, context: CodeContext):
        """Recursively process directory for code files"""
        total_size = 0
        
        for file_path in directory.rglob('*'):
            if file_path.is_file() and self._is_supported_file(str(file_path)):
                try:
                    if file_path.stat().st_size > self.max_file_size:
                        continue
                    
                    total_size += file_path.stat().st_size
                    if total_size > self.max_repo_size:
                        logger.warning("Repository size exceeds limit")
                        break
                    
                    async with aiofiles.open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = await f.read()
                    
                    # Create relative path from repository root
                    relative_path = file_path.relative_to(directory)
                    code_file = CodeFile(path=str(relative_path), content=content)
                    context.add_file(code_file)
                    
                except Exception as e:
                    logger.warning(f"Failed to process file {file_path}: {e}")
                    continue
    
    def _is_supported_file(self, filename: str) -> bool:
        """Check if file extension is supported"""
        return Path(filename).suffix.lower() in self.supported_extensions
    
    async def analyze_context(self, context: CodeContext) -> Dict[str, Any]:
        """Perform initial AST analysis on code context"""
        analysis_results = {}
        
        for code_file in context.files:
            try:
                file_analysis = self.ast_analyzer.analyze_file(code_file)
                analysis_results[code_file.path.name] = file_analysis
            except Exception as e:
                logger.error(f"Failed to analyze file {code_file.path}: {e}")
                analysis_results[code_file.path.name] = {'error': str(e)}
        
        return {
            'context_metadata': context.metadata,
            'file_analyses': analysis_results,
            'summary': {
                'total_files_analyzed': len(analysis_results),
                'languages_detected': list(context.get_language_distribution().keys()),
                'analysis_timestamp': context.metadata.get('analysis_timestamp')
            }
        }
```

### **1.4 Base Agent Framework**

```python
# src/agents/base/base_agent.py
import uuid
import asyncio
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from datetime import datetime
import logging

from src.core.config.config_manager import get_config_manager
from src.core.input.input_processor import CodeContext

logger = logging.getLogger(__name__)

class Finding:
    """Represents a code analysis finding"""
    
    def __init__(
        self,
        id: str,
        rule_id: str,
        title: str,
        description: str,
        severity: str,  # CRITICAL, HIGH, MEDIUM, LOW
        confidence: float,  # 0.0 to 1.0
        file_path: str,
        line_number: Optional[int] = None,
        code_snippet: Optional[str] = None,
        recommendation: Optional[str] = None,
        source_agent: Optional[str] = None
    ):
        self.id = id
        self.rule_id = rule_id
        self.title = title
        self.description = description
        self.severity = severity
        self.confidence = confidence
        self.file_path = file_path
        self.line_number = line_number
        self.code_snippet = code_snippet
        self.recommendation = recommendation
        self.source_agent = source_agent
        self.created_at = datetime.utcnow()
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert finding to dictionary"""
        return {
            'id': self.id,
            'rule_id': self.rule_id,
            'title': self.title,
            'description': self.description,
            'severity': self.severity,
            'confidence': self.confidence,
            'file_path': self.file_path,
            'line_number': self.line_number,
            'code_snippet': self.code_snippet,
            'recommendation': self.recommendation,
            'source_agent': self.source_agent,
            'created_at': self.created_at.isoformat()
        }

class AgentResult:
    """Container for agent analysis results"""
    
    def __init__(self, agent_id: str):
        self.agent_id = agent_id
        self.findings: List[Finding] = []
        self.recommendations: List[Dict[str, Any]] = []
        self.metrics: Dict[str, Any] = {}
        self.execution_time: float = 0.0
        self.status: str = "initialized"  # initialized, running, completed, failed
        self.error_message: Optional[str] = None
        self.created_at = datetime.utcnow()
    
    def add_finding(self, finding: Finding):
        """Add a finding to the results"""
        finding.source_agent = self.agent_id
        self.findings.append(finding)
    
    def add_recommendation(self, title: str, description: str, priority: str = "MEDIUM"):
        """Add a recommendation to the results"""
        recommendation = {
            'id': str(uuid.uuid4()),
            'title': title,
            'description': description,
            'priority': priority,
            'source_agent': self.agent_id,
            'created_at': datetime.utcnow().isoformat()
        }
        self.recommendations.append(recommendation)
    
    def set_metrics(self, metrics: Dict[str, Any]):
        """Set analysis metrics"""
        self.metrics = metrics
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert result to dictionary"""
        return {
            'agent_id': self.agent_id,
            'findings': [f.to_dict() for f in self.findings],
            'recommendations': self.recommendations,
            'metrics': self.metrics,
            'execution_time': self.execution_time,
            'status': self.status,
            'error_message': self.error_message,
            'created_at': self.created_at.isoformat()
        }

class BaseAgent(ABC):
    """Base class for all analysis agents"""
    
    def __init__(self, agent_id: str):
        self.agent_id = agent_id
        self.config_manager = get_config_manager()
        self.config = self.config_manager.get_agent_config(agent_id)
        self.llm_config = self.config_manager.get_llm_config()
        self.logger = logging.getLogger(f"agent.{agent_id}")
    
    @abstractmethod
    async def analyze(self, context: CodeContext) -> AgentResult:
        """Perform analysis on the provided code context"""
        pass
    
    async def execute_safely(self, context: CodeContext) -> AgentResult:
        """Execute agent analysis with error handling and timing"""
        result = AgentResult(self.agent_id)
        start_time = asyncio.get_event_loop().time()
        
        try:
            result.status = "running"
            self.logger.info(f"Starting analysis for {self.agent_id}")
            
            # Execute the actual analysis
            result = await self.analyze(context)
            result.status = "completed"
            
            self.logger.info(f"Completed analysis for {self.agent_id} - {len(result.findings)} findings")
            
        except Exception as e:
            result.status = "failed"
            result.error_message = str(e)
            self.logger.error(f"Analysis failed for {self.agent_id}: {e}")
            
        finally:
            result.execution_time = asyncio.get_event_loop().time() - start_time
        
        return result
    
    def _create_finding(
        self,
        rule_id: str,
        title: str,
        description: str,
        severity: str,
        confidence: float,
        file_path: str,
        line_number: Optional[int] = None,
        code_snippet: Optional[str] = None,
        recommendation: Optional[str] = None
    ) -> Finding:
        """Helper method to create standardized findings"""
        return Finding(
            id=str(uuid.uuid4()),
            rule_id=rule_id,
            title=title,
            description=description,
            severity=severity,
            confidence=confidence,
            file_path=file_path,
            line_number=line_number,
            code_snippet=code_snippet,
            recommendation=recommendation,
            source_agent=self.agent_id
        )
    
    def _validate_finding(self, finding: Finding) -> bool:
        """Validate finding against agent configuration"""
        confidence_threshold = self.config.get('quality_control', {}).get('confidence_threshold', 0.7)
        return finding.confidence >= confidence_threshold
    
    def _get_llm_client(self):
        """Get LLM client based on configuration"""
        # This would return the appropriate LLM client
        # Implementation depends on chosen LLM integration library
        pass
```

---

## 🧠 **Phase 2: Memory & Learning Foundation Implementation**

### **2.1 Memory System Architecture**

#### **Memory Storage Layer**
```python
# src/memory/storage/memory_store.py
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from datetime import datetime
import asyncio

@dataclass
class MemoryEntry:
    """Base memory entry structure"""
    id: str
    content: Dict[str, Any]
    context: Dict[str, str]  # project, language, file_path, etc.
    confidence: float
    created_at: datetime
    updated_at: datetime
    access_count: int = 0
    tags: List[str] = None

class MemoryStore(ABC):
    """Abstract base for memory storage implementations"""
    
    @abstractmethod
    async def store(self, entry: MemoryEntry) -> str:
        """Store memory entry and return ID"""
        pass
    
    @abstractmethod
    async def retrieve(self, entry_id: str) -> Optional[MemoryEntry]:
        """Retrieve memory entry by ID"""
        pass
    
    @abstractmethod
    async def search(self, query: Dict[str, Any], limit: int = 10) -> List[MemoryEntry]:
        """Search memory entries by context/content"""
        pass
    
    @abstractmethod
    async def update_confidence(self, entry_id: str, confidence: float) -> bool:
        """Update confidence score for memory entry"""
        pass

class PersistentMemoryStore(MemoryStore):
    """SQLite-based persistent memory storage"""
    
    def __init__(self, db_path: str = "data/memory.db"):
        self.db_path = db_path
        self._init_db()
    
    async def store(self, entry: MemoryEntry) -> str:
        # Implementation for persistent storage
        pass
    
    async def retrieve(self, entry_id: str) -> Optional[MemoryEntry]:
        # Implementation for retrieval
        pass

class TransientMemoryStore(MemoryStore):
    """In-memory storage for session-based memory"""
    
    def __init__(self):
        self._memory: Dict[str, MemoryEntry] = {}
    
    async def store(self, entry: MemoryEntry) -> str:
        self._memory[entry.id] = entry
        return entry.id
```

#### **Memory Retrieval System**
```python
# src/memory/retrieval/memory_retriever.py
import asyncio
from typing import Dict, List, Optional, Any
from .memory_store import MemoryStore, MemoryEntry

class MemoryRetriever:
    """Intelligent memory retrieval with context awareness"""
    
    def __init__(self, persistent_store: MemoryStore, transient_store: MemoryStore):
        self.persistent = persistent_store
        self.transient = transient_store
    
    async def get_relevant_memories(self, context: Dict[str, str], 
                                   content_type: str = None, 
                                   limit: int = 10) -> List[MemoryEntry]:
        """Retrieve memories relevant to current context"""
        
        # Search transient memory first (session-specific)
        transient_results = await self.transient.search({
            "context": context,
            "content_type": content_type
        }, limit=limit//2)
        
        # Search persistent memory for historical patterns
        persistent_results = await self.persistent.search({
            "context": context,
            "content_type": content_type
        }, limit=limit//2)
        
        # Combine and rank by relevance
        all_results = transient_results + persistent_results
        return self._rank_by_relevance(all_results, context)
    
    def _rank_by_relevance(self, memories: List[MemoryEntry], 
                          context: Dict[str, str]) -> List[MemoryEntry]:
        """Rank memories by relevance to current context"""
        # Implementation of relevance scoring
        return sorted(memories, key=lambda m: m.confidence, reverse=True)
```

### **2.2 Learning System Foundation**

#### **Pattern Recognition Engine**
```python
# src/memory/learning/pattern_engine.py
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from enum import Enum

class PatternType(Enum):
    CODE_PATTERN = "code_pattern"
    ARCHITECTURE_PATTERN = "architecture_pattern"
    ANTI_PATTERN = "anti_pattern"
    SECURITY_PATTERN = "security_pattern"
    PERFORMANCE_PATTERN = "performance_pattern"

@dataclass
class Pattern:
    """Learned pattern structure"""
    id: str
    type: PatternType
    signature: str  # Pattern identifier/hash
    description: str
    examples: List[Dict[str, Any]]
    confidence: float
    occurrence_count: int
    languages: List[str]
    contexts: List[str]

class PatternRecognitionEngine:
    """Learn and recognize patterns in code analysis"""
    
    def __init__(self, memory_store):
        self.memory = memory_store
        self.patterns: Dict[str, Pattern] = {}
    
    async def learn_pattern(self, code_sample: str, analysis_result: Dict[str, Any], 
                           context: Dict[str, str]) -> Optional[Pattern]:
        """Learn new pattern from code analysis"""
        
        # Extract pattern signature
        signature = self._extract_pattern_signature(code_sample, analysis_result)
        
        # Check if pattern already exists
        existing = await self._find_similar_pattern(signature, context)
        if existing:
            return await self._update_pattern_confidence(existing, code_sample, analysis_result)
        
        # Create new pattern
        pattern = Pattern(
            id=self._generate_pattern_id(),
            type=self._classify_pattern_type(analysis_result),
            signature=signature,
            description=self._generate_description(analysis_result),
            examples=[{"code": code_sample, "analysis": analysis_result}],
            confidence=0.7,  # Initial confidence
            occurrence_count=1,
            languages=[context.get("language", "unknown")],
            contexts=[context.get("project", "unknown")]
        )
        
        await self._store_pattern(pattern)
        return pattern
    
    async def recognize_patterns(self, code_sample: str, 
                                context: Dict[str, str]) -> List[Pattern]:
        """Recognize known patterns in code sample"""
        signature = self._extract_pattern_signature(code_sample, {})
        return await self._find_matching_patterns(signature, context)
```

#### **Confidence Scoring System**
```python
# src/memory/learning/confidence_scorer.py
from typing import Dict, Any, List
import math

class ConfidenceScorer:
    """Calculate and update confidence scores for findings and patterns"""
    
    def __init__(self):
        self.base_confidence = 0.5
        self.max_confidence = 0.95
        self.min_confidence = 0.1
    
    def calculate_finding_confidence(self, finding: Dict[str, Any], 
                                   context: Dict[str, str],
                                   historical_patterns: List[Any]) -> float:
        """Calculate confidence score for a finding"""
        
        # Base score from analysis method
        base_score = finding.get("base_confidence", self.base_confidence)
        
        # Pattern match bonus
        pattern_bonus = self._calculate_pattern_bonus(finding, historical_patterns)
        
        # Context bonus (language-specific, project-specific)
        context_bonus = self._calculate_context_bonus(finding, context)
        
        # Historical accuracy bonus
        accuracy_bonus = self._calculate_accuracy_bonus(finding, context)
        
        # Combine scores with weights
        final_score = (
            base_score * 0.4 +
            pattern_bonus * 0.3 +
            context_bonus * 0.2 +
            accuracy_bonus * 0.1
        )
        
        return max(self.min_confidence, min(self.max_confidence, final_score))
    
    def update_confidence_from_feedback(self, finding_id: str, 
                                       feedback: bool,
                                       current_confidence: float) -> float:
        """Update confidence based on user feedback"""
        
        if feedback:  # Positive feedback
            adjustment = (self.max_confidence - current_confidence) * 0.1
        else:  # Negative feedback
            adjustment = (current_confidence - self.min_confidence) * -0.2
        
        return max(self.min_confidence, 
                  min(self.max_confidence, current_confidence + adjustment))
```

### **2.3 Base Agent Framework with Memory Integration**

#### **Memory-Aware Base Agent**
```python
# src/agents/base/base_agent.py
import uuid
import asyncio
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from datetime import datetime

from src.memory.storage.memory_store import MemoryStore, MemoryEntry
from src.memory.retrieval.memory_retriever import MemoryRetriever
from src.memory.learning.pattern_engine import PatternRecognitionEngine
from src.memory.learning.confidence_scorer import ConfidenceScorer

class MemoryAwareFinding:
    """Finding with memory and learning integration"""
    
    def __init__(self, base_finding: Dict[str, Any], 
                 confidence_score: float,
                 supporting_patterns: List[Any] = None,
                 historical_context: List[MemoryEntry] = None):
        self.base_finding = base_finding
        self.confidence = confidence_score
        self.supporting_patterns = supporting_patterns or []
        self.historical_context = historical_context or []
        self.memory_enhanced = len(self.supporting_patterns) > 0

class MemoryAwareAgent(ABC):
    """Base agent class with integrated memory and learning"""
    
    def __init__(self, agent_id: str, memory_retriever: MemoryRetriever,
                 pattern_engine: PatternRecognitionEngine,
                 confidence_scorer: ConfidenceScorer):
        self.agent_id = agent_id
        self.memory = memory_retriever
        self.patterns = pattern_engine
        self.confidence = confidence_scorer
        
    @abstractmethod
    async def analyze_with_memory(self, code_context: Dict[str, Any]) -> List[MemoryAwareFinding]:
        """Perform analysis with memory integration"""
        pass
    
    async def enhance_finding_with_memory(self, base_finding: Dict[str, Any],
                                         context: Dict[str, str]) -> MemoryAwareFinding:
        """Enhance finding with memory and pattern recognition"""
        
        # Get relevant historical context
        relevant_memories = await self.memory.get_relevant_memories(
            context, content_type="finding"
        )
        
        # Recognize patterns
        code_sample = base_finding.get("code_snippet", "")
        recognized_patterns = await self.patterns.recognize_patterns(code_sample, context)
        
        # Calculate enhanced confidence
        enhanced_confidence = self.confidence.calculate_finding_confidence(
            base_finding, context, recognized_patterns
        )
        
        return MemoryAwareFinding(
            base_finding=base_finding,
            confidence_score=enhanced_confidence,
            supporting_patterns=recognized_patterns,
            historical_context=relevant_memories
        )
    
    async def learn_from_analysis(self, code_sample: str, 
                                 analysis_result: Dict[str, Any],
                                 context: Dict[str, str]):
        """Learn patterns from analysis for future improvements"""
        
        # Learn new patterns
        new_pattern = await self.patterns.learn_pattern(
            code_sample, analysis_result, context
        )
        
        # Store analysis result in memory
        memory_entry = MemoryEntry(
            id=str(uuid.uuid4()),
            content={
                "analysis_result": analysis_result,
                "agent_id": self.agent_id
            },
            context=context,
            confidence=analysis_result.get("confidence", 0.7),
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow(),
            tags=["analysis", self.agent_id]
        )
        
        await self.memory.persistent.store(memory_entry)
```

### **2.4 State Management System**

#### **Multi-Agent State Coordination**
```python
# src/core/orchestrator/state_manager.py
import asyncio
from typing import Dict, Any, List, Optional
from enum import Enum
from dataclasses import dataclass
from datetime import datetime

class AnalysisState(Enum):
    PENDING = "pending"
    INITIALIZING = "initializing"
    AGENT_ANALYSIS = "agent_analysis"
    CROSS_VALIDATION = "cross_validation"
    CONSOLIDATION = "consolidation"
    COMPLETED = "completed"
    FAILED = "failed"

@dataclass
class AgentStatus:
    """Status of individual agent in analysis"""
    agent_id: str
    state: str
    progress: float
    findings_count: int
    execution_time: float
    error_message: Optional[str] = None

class StateManager:
    """Manage state across multi-agent analysis workflows"""
    
    def __init__(self):
        self.active_analyses: Dict[str, Dict[str, Any]] = {}
        self.state_history: Dict[str, List[Dict[str, Any]]] = {}
    
    async def create_analysis_session(self, session_id: str, 
                                    agent_ids: List[str],
                                    context: Dict[str, Any]) -> str:
        """Create new analysis session with state tracking"""
        
        self.active_analyses[session_id] = {
            "state": AnalysisState.PENDING,
            "created_at": datetime.utcnow(),
            "context": context,
            "agents": {aid: AgentStatus(aid, "pending", 0.0, 0, 0.0) 
                      for aid in agent_ids},
            "findings": [],
            "progress": 0.0
        }
        
        self.state_history[session_id] = []
        return session_id
    
    async def update_agent_status(self, session_id: str, agent_id: str,
                                 status: AgentStatus):
        """Update status of specific agent"""
        if session_id in self.active_analyses:
            self.active_analyses[session_id]["agents"][agent_id] = status
            await self._update_overall_progress(session_id)
    
    async def transition_state(self, session_id: str, new_state: AnalysisState):
        """Transition analysis to new state"""
        if session_id in self.active_analyses:
            old_state = self.active_analyses[session_id]["state"]
            self.active_analyses[session_id]["state"] = new_state
            
            # Record state transition
            self.state_history[session_id].append({
                "from_state": old_state.value,
                "to_state": new_state.value,
                "timestamp": datetime.utcnow(),
                "progress": self.active_analyses[session_id]["progress"]
            })
```

---

## 🚀 **Current Implementation Status**

### **✅ Completed Infrastructure**

#### **Docker Development Environment**
- ✅ Multi-stage Dockerfile (development/production)
- ✅ Docker Compose stack with app, Redis, Ollama services
- ✅ Development scripts (`./scripts/dev.sh`) with 15+ commands
- ✅ Poetry dependency management in containers
- ✅ Live reload and development tooling

#### **FastAPI Application Structure**
- ✅ FastAPI 2.0.0 with proper API versioning (`/api/v1/`)
- ✅ CORS middleware configuration
- ✅ Structured error handling and logging
- ✅ Health check and system status endpoints
- ✅ Code analysis endpoint with placeholder implementation

#### **Development Tooling**
- ✅ Poetry configuration with all required dependencies
- ✅ Development scripts for container management
- ✅ Environment configuration with `.env.example`
- ✅ Git ignore and basic project documentation

#### **Multi-Language AST Parsing System**
- ✅ Configuration-driven language parser (no hardcoded fallback logic)
- ✅ YAML-based language configuration (config/language_config.yaml)
- ✅ AST node mappings for 10 programming languages
- ✅ Enhanced LanguageConfigManager with get_ast_node_mappings()
- ✅ Comprehensive test coverage (35/35 tests passing, 90%+ coverage)
- ✅ Support for: Java, TypeScript, JavaScript, Swift, Kotlin, Python, SQL, Go, Rust, C#

#### **Language Configuration System**
- ✅ Enhanced language_config.yaml with 300+ lines of configuration
- ✅ AST node mappings migration from hardcode to YAML
- ✅ Language-specific frameworks and patterns configuration
- ✅ Integration testing with 10/10 languages operational
- ✅ C# language key fix (csharp → c_sharp)

#### **Input Processing Layer**
- ✅ Comprehensive ingestion engine (489 lines of code)
- ✅ Multiple ingestion sources: local directory, git repository, GitHub/GitLab API, ZIP archives, single files
- ✅ File discovery and preprocessing with smart filtering
- ✅ Configuration-driven include/exclude patterns
- ✅ Language detection and metadata extraction
- ✅ File status tracking (pending, processing, completed, failed, skipped)

#### **Redis Real-time State Layer** *(Just Completed)*
- ✅ Complete multi-agent coordination system (2000+ lines of code)
- ✅ Redis connection management with pooling and health checks
- ✅ Session lifecycle management with full CRUD operations
- ✅ Agent coordination with dependency resolution and messaging
- ✅ Real-time progress tracking with Redis streams and WebSocket broadcasting
- ✅ Intelligent caching with TTL management and tag-based invalidation
- ✅ Comprehensive test suite with 100% pass rate
- ✅ Production-ready error handling and cleanup mechanisms

### **🔄 In Progress**

#### **Phase 2: Memory & Learning Foundation (100% Complete)** ✅
- ✅ SQLite persistent memory layer for agent learning (COMPLETED)
- ✅ Redis real-time state coordination system (COMPLETED)
- ✅ Memory retrieval and indexing system (COMPLETED)
- ✅ Learning system foundation with pattern recognition (COMPLETED)
- ⏳ Base agent framework with memory integration (next priority)

### **⏳ Next Steps**

1. **Phase 2: Memory & Learning Foundation (Current Priority)**:
   - **Memory System**: Design and implement persistent/transient memory layers
   - **Learning Foundation**: Build pattern recognition and confidence scoring
   - **Base Agent Framework**: Create memory-integrated agent architecture
   - **State Management**: Implement multi-agent coordination and state tracking

2. **Phase 3: Agent Implementation (Post-Memory Foundation)**:
   - Build Core Agents (Code Analyzer, Engineering Practices, Security) with full memory integration
   - Leverage established learning patterns and historical context
   - Implement memory-driven insights and recommendations

3. **Strategic Rationale**:
   - **Avoid Rework**: Solid memory/learning foundation prevents agent reimplementation
   - **Enhanced Intelligence**: Agents built on memory foundation are inherently smarter
   - **Scalable Architecture**: Memory-first approach supports advanced multi-agent workflows

---

## 🚀 **Quick Start Guide**

### **1. Docker Development Setup**

```bash
# Clone repository
git clone https://github.com/your-org/agentic-code-review.git
cd agentic-code-review

# Start development environment
./scripts/dev.sh up

# View logs
./scripts/dev.sh logs app

# Access API
curl http://localhost:8000/api/v1/system/health
```

### **2. Available Development Commands**

```bash
# Container management
./scripts/dev.sh up          # Start all services
./scripts/dev.sh down        # Stop all services
./scripts/dev.sh restart     # Restart application
./scripts/dev.sh rebuild     # Rebuild containers

# Development tools
./scripts/dev.sh shell       # Access container shell
./scripts/dev.sh logs app    # View application logs
./scripts/dev.sh test        # Run tests
./scripts/dev.sh format      # Format code

# Service management
./scripts/dev.sh redis       # Redis CLI access
./scripts/dev.sh ollama      # Ollama management
```

### **3. API Endpoints**

```bash
# System endpoints
GET  /api/v1/system/health   # Health check
GET  /api/v1/system/status   # Detailed system status

# Analysis endpoints
POST /api/v1/analyze/snippet # Analyze code snippet
POST /api/v1/analyze/file    # Analyze file upload (planned)
POST /api/v1/analyze/repo    # Analyze repository (planned)
```

### **4. Test API Functionality**

```bash
# Test health endpoint
curl -s http://localhost:8000/api/v1/system/health | jq .

# Test code analysis
curl -s -X POST http://localhost:8000/api/v1/analyze/snippet \
  -H "Content-Type: application/json" \
  -d '{
    "code": "def hello():\n    print(\"Hello World\")", 
    "language": "python"
  }' | jq .
```

---

## 📊 **Development Workflow**

### **Current Development Environment**
- **Docker-First Approach**: All development happens in containers
- **Poetry Dependency Management**: Isolated dependency management
- **Live Reload**: FastAPI auto-reload for development
- **Multi-Service Stack**: App, Redis, Ollama in Docker Compose

### **Code Quality Standards**
- **Type hints** for all Python code
- **Comprehensive testing** with pytest
- **Code formatting** with black and isort
- **Linting** with mypy and flake8
- **Pre-commit hooks** for code quality

### **Testing Strategy**
- **Unit tests** for individual components
- **Integration tests** for agent workflows  
- **Performance tests** for scalability
- **End-to-end tests** for complete workflows

### **Current Architecture Implementation**

```bash
agentic-code-review/
├── src/
│   ├── main.py                        # ✅ FastAPI application entry point
│   ├── core/                          # ✅ Core system components (Phase 1 complete)
│   │   ├── config/                    # ✅ Configuration management (COMPLETED)
│   │   │   ├── config_manager.py      # ✅ Environment-driven configuration
│   │   │   └── language_config.py     # ✅ Language configuration with AST mappings
│   │   ├── input/                     # ✅ Language parsing (COMPLETED)
│   │   │   └── language_parser.py     # ✅ Multi-language AST parsing with Tree-sitter
│   │   ├── orchestrator/              # ⏳ LangGraph workflow orchestration
│   │   └── output/                    # ⏳ Report generation
│   ├── agents/                        # 🔄 Specialized AI agents (starting Phase 2)
│   │   ├── base/                      # 🔄 Base agent framework (next)
│   │   ├── code_analyzer/             # ⏳ Code structure & complexity
│   │   ├── engineering_practices/     # ⏳ SOLID, patterns, quality
│   │   ├── security_standards/        # ⏳ OWASP, vulnerabilities
│   │   ├── carbon_efficiency/         # ⏳ Performance & sustainability
│   │   ├── cloud_native/              # ⏳ 12-factor, containers
│   │   └── microservices/             # ⏳ Service boundaries, APIs
│   └── api/                           # ✅ REST API implementation
│       └── routes/v1/                 # ✅ API v1 endpoints
│           ├── system.py              # ✅ Health/status endpoints  
│           ├── analysis.py            # ✅ Analysis endpoints
│           └── router.py              # ✅ Route configuration
├── config/                            # ⏳ Configuration files (planned)
├── data/                              # ✅ Data storage
├── scripts/
│   └── dev.sh                         # ✅ Development script
├── Dockerfile                         # ✅ Multi-stage container build
├── docker-compose.yml                # ✅ Development stack
├── pyproject.toml                     # ✅ Poetry configuration
├── .env.example                       # ✅ Environment template
└── README.md                          # ✅ Project documentation
```

### **Implementation Priorities**

1. **Phase 1 Completion**:
   - Configuration management system
   - Tree-sitter language parsing
   - Base agent framework
   - Input processing layer

2. **Quality Assurance**:
   - Comprehensive test coverage
   - Error handling and logging
   - Performance optimization
   - Security hardening

---

This clean implementation plan provides a solid foundation for building the Agentic Code Review System with proper configuration management, multi-language support, and a phased approach to development. Each component is designed to be configurable, testable, and production-ready.
